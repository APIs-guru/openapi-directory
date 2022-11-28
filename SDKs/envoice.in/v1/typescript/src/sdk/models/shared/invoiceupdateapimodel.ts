import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceUpdateAttachmentApiModel } from "./invoiceupdateattachmentapimodel";
import { InvoiceUpdateItemApiModel } from "./invoiceupdateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";


export enum InvoiceUpdateApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class InvoiceUpdateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceUpdateAttachmentApiModel })
  attachments?: InvoiceUpdateAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceUpdateItemApiModel })
  items?: InvoiceUpdateItemApiModel[];

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
  status?: InvoiceUpdateApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;
}
