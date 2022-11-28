import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";
export declare enum InvoiceStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}
export declare enum InvoiceInvoiceTypeEnum {
    Standard = "standard",
    Credit = "credit",
    Service = "service",
    Product = "product",
    Supplier = "supplier",
    Other = "other"
}
export declare class Invoice extends SpeakeasyBase {
    balance?: number;
    billingAddress?: Address;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomer;
    customerMemo?: string;
    deposit?: number;
    discountPercentage?: number;
    downstreamId?: string;
    dueDate?: Date;
    id?: string;
    invoiceDate?: Date;
    invoiceSent?: boolean;
    lineItems?: InvoiceLineItem[];
    number?: string;
    poNumber?: string;
    reference?: string;
    rowVersion?: string;
    shippingAddress?: Address;
    sourceDocumentUrl?: string;
    status?: InvoiceStatusEnum;
    subTotal?: number;
    taxCode?: string;
    taxInclusive?: boolean;
    templateId?: string;
    terms?: string;
    total?: number;
    totalTax?: number;
    type?: InvoiceInvoiceTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class InvoiceInput extends SpeakeasyBase {
    balance?: number;
    billingAddress?: Address;
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomerInput;
    customerMemo?: string;
    deposit?: number;
    discountPercentage?: number;
    dueDate?: Date;
    invoiceDate?: Date;
    invoiceSent?: boolean;
    lineItems?: InvoiceLineItemInput[];
    number?: string;
    poNumber?: string;
    reference?: string;
    rowVersion?: string;
    shippingAddress?: Address;
    sourceDocumentUrl?: string;
    status?: InvoiceStatusEnum;
    subTotal?: number;
    taxCode?: string;
    taxInclusive?: boolean;
    templateId?: string;
    terms?: string;
    total?: number;
    totalTax?: number;
    type?: InvoiceInvoiceTypeEnum;
}
