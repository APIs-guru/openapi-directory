import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PipelinesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PipelinesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PipelinesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PipelinesAddRequest extends SpeakeasyBase {
    queryParams: PipelinesAddQueryParams;
    headers: PipelinesAddHeaders;
    request: shared.Pipeline;
    security: PipelinesAddSecurity;
}
export declare class PipelinesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createPipelineResponse?: shared.CreatePipelineResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
