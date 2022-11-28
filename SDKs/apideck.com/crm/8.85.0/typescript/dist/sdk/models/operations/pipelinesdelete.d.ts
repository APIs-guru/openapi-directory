import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PipelinesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PipelinesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PipelinesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PipelinesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PipelinesDeleteRequest extends SpeakeasyBase {
    pathParams: PipelinesDeletePathParams;
    queryParams: PipelinesDeleteQueryParams;
    headers: PipelinesDeleteHeaders;
    security: PipelinesDeleteSecurity;
}
export declare class PipelinesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deletePipelineResponse?: shared.DeletePipelineResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
