import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PipelinesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PipelinesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PipelinesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PipelinesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PipelinesUpdateRequest extends SpeakeasyBase {
    pathParams: PipelinesUpdatePathParams;
    queryParams: PipelinesUpdateQueryParams;
    headers: PipelinesUpdateHeaders;
    request: shared.PipelineInput;
    security: PipelinesUpdateSecurity;
}
export declare class PipelinesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updatePipelineResponse?: shared.UpdatePipelineResponse;
}
