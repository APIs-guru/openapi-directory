import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ItemsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ItemsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ItemsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ItemsUpdateRequest extends SpeakeasyBase {
    pathParams: ItemsUpdatePathParams;
    queryParams: ItemsUpdateQueryParams;
    headers: ItemsUpdateHeaders;
    request: shared.ItemInput;
    security: ItemsUpdateSecurity;
}
export declare class ItemsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateItemResponse?: shared.UpdateItemResponse;
}
