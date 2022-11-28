import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams extends SpeakeasyBase {
    enterprise: string;
    scimGroupId: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
    value: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody extends SpeakeasyBase {
    displayName: string;
    members?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers[];
    schemas: string[];
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams;
    request?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
