import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoicePaymentApiModelTypeEnum {
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
export declare class InvoicePaymentApiModel extends SpeakeasyBase {
    amount?: number;
    id?: number;
    isAutomatic?: boolean;
    note?: string;
    paidOn?: Date;
    referenceId?: string;
    type?: InvoicePaymentApiModelTypeEnum;
}
