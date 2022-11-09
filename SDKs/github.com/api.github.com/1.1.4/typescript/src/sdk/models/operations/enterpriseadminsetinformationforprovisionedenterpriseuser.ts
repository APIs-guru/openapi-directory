import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName: string;

  @Metadata({ data: "json, name=givenName" })
  givenName: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails", elemType: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails })
  emails: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails[];

  @Metadata({ data: "json, name=groups", elemType: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups })
  groups?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups[];

  @Metadata({ data: "json, name=name" })
  name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=userName" })
  userName: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
