import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceLineItemEntity } from "./invoicelineitementity";
import { PaymentLineItemEntity } from "./paymentlineitementity";
/**
 * List Payments
**/
export declare class AccountLineItemEntity extends SpeakeasyBase {
    amount?: number;
    balance?: number;
    createdAt?: Date;
    currency?: string;
    downloadUri?: string;
    id?: number;
    invoiceLineItems?: InvoiceLineItemEntity;
    method?: string;
    paymentLineItems?: PaymentLineItemEntity;
    paymentReversedAt?: Date;
    paymentType?: string;
    siteName?: string;
    type?: string;
    updatedAt?: Date;
}
