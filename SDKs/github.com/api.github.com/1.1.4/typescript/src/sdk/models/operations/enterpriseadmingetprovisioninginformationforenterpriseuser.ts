import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
