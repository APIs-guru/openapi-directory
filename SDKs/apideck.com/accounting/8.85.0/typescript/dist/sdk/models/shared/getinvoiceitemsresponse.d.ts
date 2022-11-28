import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceItem } from "./invoiceitem";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetInvoiceItemsResponse extends SpeakeasyBase {
    data: InvoiceItem[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
