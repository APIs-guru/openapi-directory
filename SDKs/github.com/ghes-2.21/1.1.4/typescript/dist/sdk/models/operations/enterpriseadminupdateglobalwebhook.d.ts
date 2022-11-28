import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateGlobalWebhookPathParams extends SpeakeasyBase {
    hookId: number;
}
export declare class EnterpriseAdminUpdateGlobalWebhookHeaders extends SpeakeasyBase {
    accept: string;
}
/**
 * Key/value pairs to provide settings for this webhook.
**/
export declare class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url: string;
}
export declare class EnterpriseAdminUpdateGlobalWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    config?: EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;
    events?: string[];
}
export declare class EnterpriseAdminUpdateGlobalWebhookRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateGlobalWebhookPathParams;
    headers: EnterpriseAdminUpdateGlobalWebhookHeaders;
    request?: EnterpriseAdminUpdateGlobalWebhookRequestBody;
}
export declare class EnterpriseAdminUpdateGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    globalHook2?: shared.GlobalHook2;
}
