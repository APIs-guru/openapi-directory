import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BillsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class BillsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class BillsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BillsDeleteRequest extends SpeakeasyBase {
    pathParams: BillsDeletePathParams;
    queryParams: BillsDeleteQueryParams;
    headers: BillsDeleteHeaders;
    security: BillsDeleteSecurity;
}
export declare class BillsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteBillResponse?: shared.DeleteBillResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
