import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocationsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LocationsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LocationsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LocationsAddRequest extends SpeakeasyBase {
    queryParams: LocationsAddQueryParams;
    headers: LocationsAddHeaders;
    request: shared.LocationInput;
    security: LocationsAddSecurity;
}
export declare class LocationsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createLocationResponse?: shared.CreateLocationResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
