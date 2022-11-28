import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiDetailsQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class InvoiceApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiDetailsRequest extends SpeakeasyBase {
    queryParams: InvoiceApiDetailsQueryParams;
    headers: InvoiceApiDetailsHeaders;
}
export declare class InvoiceApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;
    statusCode: number;
}
