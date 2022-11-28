import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifiersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifiersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifiersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifiersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifiersUpdateRequest extends SpeakeasyBase {
    pathParams: ModifiersUpdatePathParams;
    queryParams: ModifiersUpdateQueryParams;
    headers: ModifiersUpdateHeaders;
    request: shared.ModifierInput;
    security: ModifiersUpdateSecurity;
}
export declare class ModifiersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateModifierResponse?: shared.UpdateModifierResponse;
}
