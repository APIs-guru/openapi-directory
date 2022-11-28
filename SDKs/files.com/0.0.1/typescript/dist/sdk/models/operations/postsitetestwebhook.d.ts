import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSiteTestWebhookRequestBody extends SpeakeasyBase {
    action?: string;
    body?: Map<string, any>;
    encoding?: string;
    headers?: Map<string, any>;
    method?: string;
    url: string;
}
export declare class PostSiteTestWebhookRequest extends SpeakeasyBase {
    request: PostSiteTestWebhookRequestBody;
}
export declare class PostSiteTestWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    statusEntity?: shared.StatusEntity;
}
