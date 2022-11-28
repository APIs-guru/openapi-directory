import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceItem extends SpeakeasyBase {
    cost?: number;
    description?: string;
    discountAmount?: number;
    discountPercentage?: number;
    id?: number;
    invoiceId?: number;
    quantity?: number;
    subTotalAmount?: number;
    taxAmount?: number;
    taxId?: number;
    taxPercentage?: number;
    totalAmount?: number;
    workTypeId?: number;
}
