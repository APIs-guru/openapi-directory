import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ActivitiesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ActivitiesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ActivitiesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ActivitiesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ActivitiesUpdateRequest extends SpeakeasyBase {
    pathParams: ActivitiesUpdatePathParams;
    queryParams: ActivitiesUpdateQueryParams;
    headers: ActivitiesUpdateHeaders;
    request: shared.Activity;
    security: ActivitiesUpdateSecurity;
}
export declare class ActivitiesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateActivityResponse?: shared.UpdateActivityResponse;
}
