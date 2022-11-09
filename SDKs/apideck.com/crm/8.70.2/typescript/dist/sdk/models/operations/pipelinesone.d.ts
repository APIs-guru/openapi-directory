import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PipelinesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PipelinesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PipelinesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PipelinesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PipelinesOneRequest extends SpeakeasyBase {
    pathParams: PipelinesOnePathParams;
    queryParams: PipelinesOneQueryParams;
    headers: PipelinesOneHeaders;
    security: PipelinesOneSecurity;
}
export declare class PipelinesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getPipelineResponse?: shared.GetPipelineResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
