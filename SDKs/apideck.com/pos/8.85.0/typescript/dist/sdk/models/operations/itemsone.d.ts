import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ItemsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ItemsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ItemsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ItemsOneRequest extends SpeakeasyBase {
    pathParams: ItemsOnePathParams;
    queryParams: ItemsOneQueryParams;
    headers: ItemsOneHeaders;
    security: ItemsOneSecurity;
}
export declare class ItemsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getItemResponse?: shared.GetItemResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
