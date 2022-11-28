import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetWebhookConfigForOrgPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
export declare class OrgsGetWebhookConfigForOrgRequest extends SpeakeasyBase {
    pathParams: OrgsGetWebhookConfigForOrgPathParams;
}
export declare class OrgsGetWebhookConfigForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookConfig?: shared.WebhookConfig;
}
