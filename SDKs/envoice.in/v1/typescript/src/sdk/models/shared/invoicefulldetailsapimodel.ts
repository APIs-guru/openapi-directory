import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceActivityApiModel } from "./invoiceactivityapimodel";
import { InvoiceAttachmentApiModel } from "./invoiceattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceItemApiModel } from "./invoiceitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoicePaymentApiModel } from "./invoicepaymentapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";


export enum InvoiceFullDetailsApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class InvoiceFullDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: InvoiceActivityApiModel })
  activities?: InvoiceActivityApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceAttachmentApiModel })
  attachments?: InvoiceAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Client" })
  client?: ClientDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EnablePartialPayments" })
  enablePartialPayments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceItemApiModel })
  items?: InvoiceItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: InvoiceGatewayApiModel })
  paymentGateways?: InvoiceGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Payments", elemType: InvoicePaymentApiModel })
  payments?: InvoicePaymentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfile" })
  recurringProfile?: InvoiceRecurringApiModel;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InvoiceFullDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
