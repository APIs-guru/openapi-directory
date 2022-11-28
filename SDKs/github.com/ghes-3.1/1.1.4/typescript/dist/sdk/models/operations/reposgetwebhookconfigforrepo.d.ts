import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetWebhookConfigForRepoPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetWebhookConfigForRepoRequest extends SpeakeasyBase {
    pathParams: ReposGetWebhookConfigForRepoPathParams;
}
export declare class ReposGetWebhookConfigForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookConfig?: shared.WebhookConfig;
}
