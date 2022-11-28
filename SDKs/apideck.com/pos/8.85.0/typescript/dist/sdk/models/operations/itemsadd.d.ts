import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ItemsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ItemsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ItemsAddRequest extends SpeakeasyBase {
    queryParams: ItemsAddQueryParams;
    headers: ItemsAddHeaders;
    request: shared.ItemInput;
    security: ItemsAddSecurity;
}
export declare class ItemsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createItemResponse?: shared.CreateItemResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
