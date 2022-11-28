import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
export declare enum PaymentTypeEnum {
    Other = "Other",
    Paypal = "Paypal",
    Stripe = "Stripe",
    Payoneer = "Payoneer",
    Bank = "Bank",
    Cash = "Cash",
    Cheque = "Cheque",
    Ach = "Ach",
    Sepa = "Sepa",
    Square = "Square",
    KlikAndPay = "KlikAndPay",
    Razorpay = "Razorpay",
    Wepay = "Wepay",
    Halkbank = "Halkbank",
    TwoCheckout = "TwoCheckout",
    PaymentWall = "PaymentWall",
    BamboraEu = "BamboraEU",
    BamboraNa = "BamboraNA",
    Nlb = "Nlb",
    AuthorizeNet = "AuthorizeNet",
    Braintree = "Braintree"
}
export declare class Payment extends SpeakeasyBase {
    amount?: number;
    id?: number;
    invoice?: Invoice;
    invoiceId?: number;
    isAutomatic?: boolean;
    note?: string;
    paidOn?: Date;
    referenceId?: string;
    type?: PaymentTypeEnum;
}
