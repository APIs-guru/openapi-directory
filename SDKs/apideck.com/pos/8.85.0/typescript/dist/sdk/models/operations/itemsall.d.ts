import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class ItemsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ItemsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ItemsAllRequest extends SpeakeasyBase {
    queryParams: ItemsAllQueryParams;
    headers: ItemsAllHeaders;
    security: ItemsAllSecurity;
}
export declare class ItemsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getItemsResponse?: shared.GetItemsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
