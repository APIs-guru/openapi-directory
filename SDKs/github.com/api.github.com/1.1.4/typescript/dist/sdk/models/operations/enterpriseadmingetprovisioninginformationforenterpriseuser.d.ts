import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams extends SpeakeasyBase {
    enterprise: string;
    scimUserId: string;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
