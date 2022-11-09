import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName: string;

  @Metadata({ data: "json, name=givenName" })
  givenName: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails", elemType: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails })
  emails: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails[];

  @Metadata({ data: "json, name=groups", elemType: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups })
  groups?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups[];

  @Metadata({ data: "json, name=name" })
  name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=userName" })
  userName: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
