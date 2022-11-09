import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ActivitiesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ActivitiesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ActivitiesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ActivitiesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ActivitiesDeleteRequest extends SpeakeasyBase {
    pathParams: ActivitiesDeletePathParams;
    queryParams: ActivitiesDeleteQueryParams;
    headers: ActivitiesDeleteHeaders;
    security: ActivitiesDeleteSecurity;
}
export declare class ActivitiesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteActivityResponse?: shared.DeleteActivityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
