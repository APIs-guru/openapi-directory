import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfTenantWebhooksQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestListOfTenantWebhooksHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class RequestListOfTenantWebhooksRequest extends SpeakeasyBase {
    queryParams: RequestListOfTenantWebhooksQueryParams;
    headers: RequestListOfTenantWebhooksHeaders;
}
export declare class RequestListOfTenantWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhookList?: shared.WebhookList;
}
