import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmailSendSalesInvoiceRequest extends SpeakeasyBase {
    request: shared.SalesInvoiceEmailInfoDto;
}
export declare class EmailSendSalesInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    emailSendSalesInvoice200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
