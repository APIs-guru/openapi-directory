import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
    value: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody extends SpeakeasyBase {
    displayName: string;
    members?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers[];
    schemas: string[];
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams;
    request?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
