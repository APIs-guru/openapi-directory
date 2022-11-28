import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifiersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifiersOneQueryParams extends SpeakeasyBase {
    filter?: shared.ModifierGroupFilter;
    raw?: boolean;
}
export declare class ModifiersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifiersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifiersOneRequest extends SpeakeasyBase {
    pathParams: ModifiersOnePathParams;
    queryParams: ModifiersOneQueryParams;
    headers: ModifiersOneHeaders;
    security: ModifiersOneSecurity;
}
export declare class ModifiersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getModifierResponse?: shared.GetModifierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
