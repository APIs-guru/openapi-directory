import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsUpdateWebhookConfigForAppRequestBody extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url?: string;
}
export declare class AppsUpdateWebhookConfigForAppRequest extends SpeakeasyBase {
    request?: AppsUpdateWebhookConfigForAppRequestBody;
}
export declare class AppsUpdateWebhookConfigForAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookConfig?: shared.WebhookConfig;
}
