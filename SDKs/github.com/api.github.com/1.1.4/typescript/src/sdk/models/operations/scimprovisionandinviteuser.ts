import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimProvisionAndInviteUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ScimProvisionAndInviteUserRequestBodyEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class ScimProvisionAndInviteUserRequestBodyName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName: string;
}


export class ScimProvisionAndInviteUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emails", elemType: operations.ScimProvisionAndInviteUserRequestBodyEmails })
  emails: ScimProvisionAndInviteUserRequestBodyEmails[];

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=name" })
  name: ScimProvisionAndInviteUserRequestBodyName;

  @Metadata({ data: "json, name=schemas" })
  schemas?: string[];

  @Metadata({ data: "json, name=userName" })
  userName: string;
}


export class ScimProvisionAndInviteUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimProvisionAndInviteUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ScimProvisionAndInviteUserRequestBody;
}


export class ScimProvisionAndInviteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  scimUser?: shared.ScimUser;
}
