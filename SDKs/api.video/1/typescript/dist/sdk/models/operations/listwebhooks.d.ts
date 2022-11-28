import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWebhooksQueryParams extends SpeakeasyBase {
    currentPage?: number;
    events?: string;
    pageSize?: number;
}
export declare class ListWebhooksSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ListWebhooksRequest extends SpeakeasyBase {
    queryParams: ListWebhooksQueryParams;
    security: ListWebhooksSecurity;
}
export declare class ListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhooksListResponse?: shared.WebhooksListResponse;
}
