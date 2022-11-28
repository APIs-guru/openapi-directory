import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails", elemType: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails })
  emails: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups })
  groups?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
