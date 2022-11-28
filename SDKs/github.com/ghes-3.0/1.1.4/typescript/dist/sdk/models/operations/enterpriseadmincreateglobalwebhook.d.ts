import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateGlobalWebhookHeaders extends SpeakeasyBase {
    accept: string;
}
/**
 * Key/value pairs to provide settings for this webhook.
**/
export declare class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url: string;
}
export declare class EnterpriseAdminCreateGlobalWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;
    events?: string[];
    name: string;
}
export declare class EnterpriseAdminCreateGlobalWebhookRequest extends SpeakeasyBase {
    headers: EnterpriseAdminCreateGlobalWebhookHeaders;
    request?: EnterpriseAdminCreateGlobalWebhookRequestBody;
}
export declare class EnterpriseAdminCreateGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    globalHook?: shared.GlobalHook;
}
