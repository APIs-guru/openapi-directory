import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetPreReceiveHookForOrgPathParams extends SpeakeasyBase {
    org: string;
    preReceiveHookId: number;
}
export declare class EnterpriseAdminGetPreReceiveHookForOrgRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetPreReceiveHookForOrgPathParams;
}
export declare class EnterpriseAdminGetPreReceiveHookForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
