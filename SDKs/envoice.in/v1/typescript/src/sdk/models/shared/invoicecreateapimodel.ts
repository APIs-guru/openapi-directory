import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceCreateAttachmentApiModel } from "./invoicecreateattachmentapimodel";
import { InvoiceCreateItemApiModel } from "./invoicecreateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";


export enum InvoiceCreateApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class InvoiceCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceCreateAttachmentApiModel })
  attachments?: InvoiceCreateAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceCreateItemApiModel })
  items?: InvoiceCreateItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: InvoiceGatewayApiModel })
  paymentGateways?: InvoiceGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfile" })
  recurringProfile?: InvoiceRecurringApiModel;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InvoiceCreateApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;
}
