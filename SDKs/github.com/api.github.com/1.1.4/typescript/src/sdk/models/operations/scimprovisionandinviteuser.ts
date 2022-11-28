import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimProvisionAndInviteUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ScimProvisionAndInviteUserRequestBodyEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class ScimProvisionAndInviteUserRequestBodyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName: string;
}


export class ScimProvisionAndInviteUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimProvisionAndInviteUserRequestBodyEmails })
  emails: ScimProvisionAndInviteUserRequestBodyEmails[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: ScimProvisionAndInviteUserRequestBodyName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas?: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}


export class ScimProvisionAndInviteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimProvisionAndInviteUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ScimProvisionAndInviteUserRequestBody;
}


export class ScimProvisionAndInviteUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  scimUser?: shared.ScimUser;
}
