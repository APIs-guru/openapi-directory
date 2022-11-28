import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class BillsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class BillsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BillsAddRequest extends SpeakeasyBase {
    queryParams: BillsAddQueryParams;
    headers: BillsAddHeaders;
    request: shared.BillInput;
    security: BillsAddSecurity;
}
export declare class BillsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createBillResponse?: shared.CreateBillResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
