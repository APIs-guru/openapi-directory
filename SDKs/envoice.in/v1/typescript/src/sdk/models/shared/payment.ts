import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invoice } from "./invoice";

export enum PaymentTypeEnum {
    Other = "Other"
,    Paypal = "Paypal"
,    Stripe = "Stripe"
,    Payoneer = "Payoneer"
,    Bank = "Bank"
,    Cash = "Cash"
,    Cheque = "Cheque"
,    Ach = "Ach"
,    Sepa = "Sepa"
,    Square = "Square"
,    KlikAndPay = "KlikAndPay"
,    Razorpay = "Razorpay"
,    Wepay = "Wepay"
,    Halkbank = "Halkbank"
,    TwoCheckout = "TwoCheckout"
,    PaymentWall = "PaymentWall"
,    BamboraEu = "BamboraEU"
,    BamboraNa = "BamboraNA"
,    Nlb = "Nlb"
,    AuthorizeNet = "AuthorizeNet"
,    Braintree = "Braintree"
}


export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Invoice" })
  invoice?: Invoice;

  @Metadata({ data: "json, name=InvoiceId" })
  invoiceId?: number;

  @Metadata({ data: "json, name=IsAutomatic" })
  isAutomatic?: boolean;

  @Metadata({ data: "json, name=Note" })
  note?: string;

  @Metadata({ data: "json, name=PaidOn" })
  paidOn?: Date;

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: PaymentTypeEnum;
}
