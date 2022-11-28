import { SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceQueryDto } from "./salesinvoicequerydto";
export declare class PageResultSalesInvoiceQueryDto extends SpeakeasyBase {
    count?: number;
    items?: SalesInvoiceQueryDto[];
    nextPageLink?: string;
}
