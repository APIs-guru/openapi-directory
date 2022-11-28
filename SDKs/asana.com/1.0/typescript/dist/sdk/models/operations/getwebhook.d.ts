import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookPathParams extends SpeakeasyBase {
    webhookGid: string;
}
export declare class GetWebhookQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetWebhook200ApplicationJson extends SpeakeasyBase {
    data?: shared.WebhookResponse;
}
export declare class GetWebhookRequest extends SpeakeasyBase {
    pathParams: GetWebhookPathParams;
    queryParams: GetWebhookQueryParams;
}
export declare class GetWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWebhook200ApplicationJsonObject?: GetWebhook200ApplicationJson;
}
