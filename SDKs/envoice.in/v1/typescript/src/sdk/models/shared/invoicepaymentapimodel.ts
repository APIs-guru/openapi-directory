import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoicePaymentApiModelTypeEnum {
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


export class InvoicePaymentApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAutomatic" })
  isAutomatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=PaidOn" })
  paidOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: InvoicePaymentApiModelTypeEnum;
}
