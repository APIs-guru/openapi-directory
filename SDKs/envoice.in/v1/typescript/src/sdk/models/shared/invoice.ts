import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";
import { InvoiceAttachment } from "./invoiceattachment";
import { InvoiceItem } from "./invoiceitem";
import { PaymentGatewayForInvoice } from "./paymentgatewayforinvoice";
import { Payment } from "./payment";

export enum InvoiceStatusEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}


export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=Activities", elemType: shared.Activity })
  activities?: Activity[];

  @Metadata({ data: "json, name=Attachments", elemType: shared.InvoiceAttachment })
  attachments?: InvoiceAttachment[];

  @Metadata({ data: "json, name=ClientId" })
  clientId?: number;

  @Metadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @Metadata({ data: "json, name=EnablePartialPayments" })
  enablePartialPayments?: boolean;

  @Metadata({ data: "json, name=EstimationId" })
  estimationId?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @Metadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @Metadata({ data: "json, name=Items", elemType: shared.InvoiceItem })
  items?: InvoiceItem[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=OrderId" })
  orderId?: number;

  @Metadata({ data: "json, name=PaymentGateways", elemType: shared.PaymentGatewayForInvoice })
  paymentGateways?: PaymentGatewayForInvoice[];

  @Metadata({ data: "json, name=PaymentLinkId" })
  paymentLinkId?: number;

  @Metadata({ data: "json, name=Payments", elemType: shared.Payment })
  payments?: Payment[];

  @Metadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @Metadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @Metadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @Metadata({ data: "json, name=Status" })
  status?: InvoiceStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=Terms" })
  terms?: string;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
