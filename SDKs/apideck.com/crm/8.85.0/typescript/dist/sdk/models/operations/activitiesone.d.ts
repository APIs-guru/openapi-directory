import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitiesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ActivitiesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ActivitiesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ActivitiesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ActivitiesOneRequest extends SpeakeasyBase {
    pathParams: ActivitiesOnePathParams;
    queryParams: ActivitiesOneQueryParams;
    headers: ActivitiesOneHeaders;
    security: ActivitiesOneSecurity;
}
export declare class ActivitiesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getActivityResponse?: shared.GetActivityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
