import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocationsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LocationsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LocationsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LocationsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LocationsUpdateRequest extends SpeakeasyBase {
    pathParams: LocationsUpdatePathParams;
    queryParams: LocationsUpdateQueryParams;
    headers: LocationsUpdateHeaders;
    request: shared.LocationInput;
    security: LocationsUpdateSecurity;
}
export declare class LocationsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateLocationResponse?: shared.UpdateLocationResponse;
}
