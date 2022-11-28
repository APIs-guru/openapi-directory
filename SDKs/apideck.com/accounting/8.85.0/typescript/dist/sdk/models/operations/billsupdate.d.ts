import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BillsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class BillsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class BillsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BillsUpdateRequest extends SpeakeasyBase {
    pathParams: BillsUpdatePathParams;
    queryParams: BillsUpdateQueryParams;
    headers: BillsUpdateHeaders;
    request: shared.BillInput;
    security: BillsUpdateSecurity;
}
export declare class BillsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateBillResponse?: shared.UpdateBillResponse;
}
