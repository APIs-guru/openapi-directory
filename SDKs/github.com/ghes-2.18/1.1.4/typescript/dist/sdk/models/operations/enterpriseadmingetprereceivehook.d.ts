import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetPreReceiveHookPathParams extends SpeakeasyBase {
    preReceiveHookId: number;
}
export declare class EnterpriseAdminGetPreReceiveHookRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetPreReceiveHookPathParams;
}
export declare class EnterpriseAdminGetPreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveHook?: shared.PreReceiveHook;
}
