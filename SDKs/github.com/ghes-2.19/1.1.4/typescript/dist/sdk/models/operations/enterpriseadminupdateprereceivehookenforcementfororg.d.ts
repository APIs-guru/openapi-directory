import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
    org: string;
    preReceiveHookId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody extends SpeakeasyBase {
    allowDownstreamConfiguration?: boolean;
    enforcement?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams;
    request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
