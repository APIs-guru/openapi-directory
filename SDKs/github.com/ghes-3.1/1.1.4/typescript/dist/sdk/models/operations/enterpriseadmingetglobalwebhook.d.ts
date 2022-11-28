import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetGlobalWebhookPathParams extends SpeakeasyBase {
    hookId: number;
}
export declare class EnterpriseAdminGetGlobalWebhookHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class EnterpriseAdminGetGlobalWebhookRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetGlobalWebhookPathParams;
    headers: EnterpriseAdminGetGlobalWebhookHeaders;
}
export declare class EnterpriseAdminGetGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    globalHook?: shared.GlobalHook;
}
