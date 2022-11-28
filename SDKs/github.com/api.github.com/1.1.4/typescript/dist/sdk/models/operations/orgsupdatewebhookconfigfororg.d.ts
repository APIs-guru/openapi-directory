import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsUpdateWebhookConfigForOrgPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
export declare class OrgsUpdateWebhookConfigForOrgRequestBody extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url?: string;
}
export declare class OrgsUpdateWebhookConfigForOrgRequest extends SpeakeasyBase {
    pathParams: OrgsUpdateWebhookConfigForOrgPathParams;
    request?: OrgsUpdateWebhookConfigForOrgRequestBody;
}
export declare class OrgsUpdateWebhookConfigForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookConfig?: shared.WebhookConfig;
}
