import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWebhookQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateWebhookRequestBody extends SpeakeasyBase {
    data?: shared.WebhookRequest;
}
export declare class CreateWebhook201ApplicationJson extends SpeakeasyBase {
    data?: shared.WebhookResponse;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    queryParams: CreateWebhookQueryParams;
    request: CreateWebhookRequestBody;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createWebhook201ApplicationJsonObject?: CreateWebhook201ApplicationJson;
}
