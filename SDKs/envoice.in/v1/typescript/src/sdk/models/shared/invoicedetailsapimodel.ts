import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";


export enum InvoiceDetailsApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class InvoiceDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

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

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfile" })
  recurringProfile?: InvoiceRecurringApiModel;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InvoiceDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
