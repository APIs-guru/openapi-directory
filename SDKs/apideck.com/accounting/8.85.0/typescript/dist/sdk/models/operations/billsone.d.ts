import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BillsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class BillsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class BillsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BillsOneRequest extends SpeakeasyBase {
    pathParams: BillsOnePathParams;
    queryParams: BillsOneQueryParams;
    headers: BillsOneHeaders;
    security: BillsOneSecurity;
}
export declare class BillsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getBillResponse?: shared.GetBillResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
