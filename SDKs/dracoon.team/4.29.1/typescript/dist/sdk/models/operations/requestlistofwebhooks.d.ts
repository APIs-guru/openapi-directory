import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfWebhooksQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestListOfWebhooksHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestListOfWebhooksRequest extends SpeakeasyBase {
    queryParams: RequestListOfWebhooksQueryParams;
    headers: RequestListOfWebhooksHeaders;
}
export declare class RequestListOfWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhookList?: shared.WebhookList;
}
