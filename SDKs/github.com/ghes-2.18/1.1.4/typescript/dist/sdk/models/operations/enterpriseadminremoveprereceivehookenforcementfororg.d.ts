import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
    org: string;
    preReceiveHookId: number;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
