import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
export declare class GetInvoiceResponse extends SpeakeasyBase {
    data: Invoice;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
