import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateWebhookConfigForRepoPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateWebhookConfigForRepoRequestBody extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: any;
    secret?: string;
    url?: string;
}
export declare class ReposUpdateWebhookConfigForRepoRequest extends SpeakeasyBase {
    pathParams: ReposUpdateWebhookConfigForRepoPathParams;
    request?: ReposUpdateWebhookConfigForRepoRequestBody;
}
export declare class ReposUpdateWebhookConfigForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookConfig?: shared.WebhookConfig;
}
