import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocationsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LocationsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LocationsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LocationsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LocationsOneRequest extends SpeakeasyBase {
    pathParams: LocationsOnePathParams;
    queryParams: LocationsOneQueryParams;
    headers: LocationsOneHeaders;
    security: LocationsOneSecurity;
}
export declare class LocationsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLocationResponse?: shared.GetLocationResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
