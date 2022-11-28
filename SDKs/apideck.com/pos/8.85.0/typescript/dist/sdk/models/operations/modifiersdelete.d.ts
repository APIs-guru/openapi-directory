import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifiersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifiersDeleteQueryParams extends SpeakeasyBase {
    filter?: shared.ModifierGroupFilter;
    raw?: boolean;
}
export declare class ModifiersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifiersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifiersDeleteRequest extends SpeakeasyBase {
    pathParams: ModifiersDeletePathParams;
    queryParams: ModifiersDeleteQueryParams;
    headers: ModifiersDeleteHeaders;
    security: ModifiersDeleteSecurity;
}
export declare class ModifiersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteModifierResponse?: shared.DeleteModifierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
