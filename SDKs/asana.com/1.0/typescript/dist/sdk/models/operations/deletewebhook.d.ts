import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    webhookGid: string;
}
export declare class DeleteWebhookQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteWebhook200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteWebhookPathParams;
    queryParams: DeleteWebhookQueryParams;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteWebhook200ApplicationJsonObject?: DeleteWebhook200ApplicationJson;
}
