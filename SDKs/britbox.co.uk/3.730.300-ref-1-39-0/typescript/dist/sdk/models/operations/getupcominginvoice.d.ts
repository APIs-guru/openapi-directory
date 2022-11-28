import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUpcomingInvoiceQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetUpcomingInvoiceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetUpcomingInvoiceRequest extends SpeakeasyBase {
    queryParams: GetUpcomingInvoiceQueryParams;
    security: GetUpcomingInvoiceSecurity;
}
export declare class GetUpcomingInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    itvGetDiscountResponse?: shared.ItvGetDiscountResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
