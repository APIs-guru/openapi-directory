import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocationsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LocationsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LocationsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LocationsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LocationsDeleteRequest extends SpeakeasyBase {
    pathParams: LocationsDeletePathParams;
    queryParams: LocationsDeleteQueryParams;
    headers: LocationsDeleteHeaders;
    security: LocationsDeleteSecurity;
}
export declare class LocationsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteLocationResponse?: shared.DeleteLocationResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
