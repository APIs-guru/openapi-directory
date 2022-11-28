import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiUriQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class InvoiceApiUriHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiUriRequest extends SpeakeasyBase {
    queryParams: InvoiceApiUriQueryParams;
    headers: InvoiceApiUriHeaders;
}
export declare class InvoiceApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceUriApiModel?: shared.InvoiceUriApiModel;
    statusCode: number;
}
