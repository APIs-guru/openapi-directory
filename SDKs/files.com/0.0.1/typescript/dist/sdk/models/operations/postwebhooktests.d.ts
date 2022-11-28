import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhookTestsRequestBody extends SpeakeasyBase {
    action?: string;
    body?: Map<string, any>;
    encoding?: string;
    fileAsBody?: boolean;
    fileFormField?: string;
    headers?: Map<string, any>;
    method?: string;
    rawBody?: string;
    url: string;
}
export declare class PostWebhookTestsRequest extends SpeakeasyBase {
    request: PostWebhookTestsRequestBody;
}
export declare class PostWebhookTestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookTestEntity?: shared.WebhookTestEntity;
}
