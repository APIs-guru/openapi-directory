import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    resource?: string;
    workspace: string;
}
export declare class GetWebhooks200ApplicationJson extends SpeakeasyBase {
    data?: shared.WebhookResponse[];
}
export declare class GetWebhooksRequest extends SpeakeasyBase {
    queryParams: GetWebhooksQueryParams;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWebhooks200ApplicationJsonObject?: GetWebhooks200ApplicationJson;
}
