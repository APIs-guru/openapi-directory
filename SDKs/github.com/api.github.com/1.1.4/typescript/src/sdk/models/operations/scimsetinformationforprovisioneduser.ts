import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimSetInformationForProvisionedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimSetInformationForProvisionedUserRequestBodyEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class ScimSetInformationForProvisionedUserRequestBodyName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName: string;
}


export class ScimSetInformationForProvisionedUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emails", elemType: operations.ScimSetInformationForProvisionedUserRequestBodyEmails })
  emails: ScimSetInformationForProvisionedUserRequestBodyEmails[];

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=name" })
  name: ScimSetInformationForProvisionedUserRequestBodyName;

  @Metadata({ data: "json, name=schemas" })
  schemas?: string[];

  @Metadata({ data: "json, name=userName" })
  userName: string;
}


export class ScimSetInformationForProvisionedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimSetInformationForProvisionedUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ScimSetInformationForProvisionedUserRequestBody;
}


export class ScimSetInformationForProvisionedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  scimUser?: shared.ScimUser;
}
