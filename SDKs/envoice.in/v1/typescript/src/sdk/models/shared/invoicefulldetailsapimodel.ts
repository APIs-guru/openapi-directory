import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceActivityApiModel } from "./invoiceactivityapimodel";
import { InvoiceAttachmentApiModel } from "./invoiceattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceItemApiModel } from "./invoiceitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoicePaymentApiModel } from "./invoicepaymentapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";

export enum InvoiceFullDetailsApiModelStatusEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}


export class InvoiceFullDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=Activities", elemType: shared.InvoiceActivityApiModel })
  activities?: InvoiceActivityApiModel[];

  @Metadata({ data: "json, name=Attachments", elemType: shared.InvoiceAttachmentApiModel })
  attachments?: InvoiceAttachmentApiModel[];

  @Metadata({ data: "json, name=Client" })
  client?: ClientDetailsApiModel;

  @Metadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @Metadata({ data: "json, name=EnablePartialPayments" })
  enablePartialPayments?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @Metadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @Metadata({ data: "json, name=Items", elemType: shared.InvoiceItemApiModel })
  items?: InvoiceItemApiModel[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=PaymentGateways", elemType: shared.InvoiceGatewayApiModel })
  paymentGateways?: InvoiceGatewayApiModel[];

  @Metadata({ data: "json, name=Payments", elemType: shared.InvoicePaymentApiModel })
  payments?: InvoicePaymentApiModel[];

  @Metadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @Metadata({ data: "json, name=RecurringProfile" })
  recurringProfile?: InvoiceRecurringApiModel;

  @Metadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @Metadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @Metadata({ data: "json, name=Status" })
  status?: InvoiceFullDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=Terms" })
  terms?: string;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
