import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ItemsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ItemsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ItemsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ItemsDeleteRequest extends SpeakeasyBase {
    pathParams: ItemsDeletePathParams;
    queryParams: ItemsDeleteQueryParams;
    headers: ItemsDeleteHeaders;
    security: ItemsDeleteSecurity;
}
export declare class ItemsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteItemResponse?: shared.DeleteItemResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
