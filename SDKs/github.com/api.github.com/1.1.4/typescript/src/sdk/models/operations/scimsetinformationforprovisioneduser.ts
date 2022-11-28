import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimSetInformationForProvisionedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimSetInformationForProvisionedUserRequestBodyEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class ScimSetInformationForProvisionedUserRequestBodyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName: string;
}


export class ScimSetInformationForProvisionedUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimSetInformationForProvisionedUserRequestBodyEmails })
  emails: ScimSetInformationForProvisionedUserRequestBodyEmails[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: ScimSetInformationForProvisionedUserRequestBodyName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas?: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}


export class ScimSetInformationForProvisionedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimSetInformationForProvisionedUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ScimSetInformationForProvisionedUserRequestBody;
}


export class ScimSetInformationForProvisionedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  scimUser?: shared.ScimUser;
}
