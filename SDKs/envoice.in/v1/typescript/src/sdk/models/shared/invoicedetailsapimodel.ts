import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";

export enum InvoiceDetailsApiModelStatusEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}


export class InvoiceDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

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

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @Metadata({ data: "json, name=RecurringProfile" })
  recurringProfile?: InvoiceRecurringApiModel;

  @Metadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @Metadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @Metadata({ data: "json, name=Status" })
  status?: InvoiceDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=Terms" })
  terms?: string;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
