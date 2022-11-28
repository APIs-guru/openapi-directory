import { SpeakeasyBase } from "../../../internal/utils";
export declare class SalesInvoiceEmailInfoDto extends SpeakeasyBase {
    bccAddresses?: string[];
    messageBody?: string;
    salesInvoiceId?: number;
    toAddress?: string;
}
