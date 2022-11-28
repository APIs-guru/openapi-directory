import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { InvoiceAttachment } from "./invoiceattachment";
import { InvoiceItem } from "./invoiceitem";
import { PaymentGatewayForInvoice } from "./paymentgatewayforinvoice";
import { Payment } from "./payment";


export enum InvoiceStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: Activity })
  activities?: Activity[];

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceAttachment })
  attachments?: InvoiceAttachment[];

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Duedate" })
  duedate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EnablePartialPayments" })
  enablePartialPayments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EstimationId" })
  estimationId?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" })
  invoiceCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceItem })
  items?: InvoiceItem[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderId" })
  orderId?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: PaymentGatewayForInvoice })
  paymentGateways?: PaymentGatewayForInvoice[];

  @SpeakeasyMetadata({ data: "json, name=PaymentLinkId" })
  paymentLinkId?: number;

  @SpeakeasyMetadata({ data: "json, name=Payments", elemType: Payment })
  payments?: Payment[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringProfileId" })
  recurringProfileId?: number;

  @SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" })
  shouldSendReminders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InvoiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;
}
