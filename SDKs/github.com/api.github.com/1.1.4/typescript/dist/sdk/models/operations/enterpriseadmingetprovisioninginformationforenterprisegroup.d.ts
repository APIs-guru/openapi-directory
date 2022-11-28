import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams extends SpeakeasyBase {
    enterprise: string;
    scimGroupId: string;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams extends SpeakeasyBase {
    excludedAttributes?: string;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams;
    queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
