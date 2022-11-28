import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceItem } from "./invoiceitem";
export declare class GetInvoiceItemResponse extends SpeakeasyBase {
    data: InvoiceItem;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
