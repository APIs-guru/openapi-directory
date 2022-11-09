import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActivityTypeEnum {
    Created = "Created"
,    Draft = "Draft"
,    Cloned = "Cloned"
,    SentViaEmail = "SentViaEmail"
,    SentViaSms = "SentViaSms"
,    SentReminderViaEmail = "SentReminderViaEmail"
,    SentReminderViaSms = "SentReminderViaSms"
,    Opened = "Opened"
,    Viewed = "Viewed"
,    Rejected = "Rejected"
,    Updated = "Updated"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    NewManualPayment = "NewManualPayment"
,    NewPaymentWithPaypal = "NewPaymentWithPaypal"
,    NewPaymentWithStripe = "NewPaymentWithStripe"
,    NewPaymentWithPayoneer = "NewPaymentWithPayoneer"
,    SentToAccountant = "SentToAccountant"
,    DownloadedAsPdf = "DownloadedAsPdf"
,    MarkAsPaidByTheClient = "MarkAsPaidByTheClient"
,    OpenedAttachment = "OpenedAttachment"
,    NewPaymentWithSquare = "NewPaymentWithSquare"
,    NewPaymentWithKlikAndPay = "NewPaymentWithKlikAndPay"
,    NewPaymentWithRazorpay = "NewPaymentWithRazorpay"
,    NewPaymentWithWepay = "NewPaymentWithWepay"
,    NewPaymentWithHalkbank = "NewPaymentWithHalkbank"
,    ChangeStatus = "ChangeStatus"
,    OrderUpdated = "OrderUpdated"
,    OrderCreated = "OrderCreated"
,    NewPaymentWithTwoCheckout = "NewPaymentWithTwoCheckout"
,    NewPaymentWithPaymentWall = "NewPaymentWithPaymentWall"
,    NewPaymentWithBamboraEu = "NewPaymentWithBamboraEU"
,    NewPaymentWithBamboraNa = "NewPaymentWithBamboraNA"
,    Void = "Void"
,    NewPaymentWithNlb = "NewPaymentWithNlb"
,    NewPaymentWithAuthorizeNet = "NewPaymentWithAuthorizeNet"
,    NewPaymentWithBraintree = "NewPaymentWithBraintree"
,    EstimationCreated = "EstimationCreated"
,    EstimationDraft = "EstimationDraft"
,    EstimationCloned = "EstimationCloned"
,    EstimationSentViaEmail = "EstimationSentViaEmail"
,    EstimationOpened = "EstimationOpened"
,    EstimationViewed = "EstimationViewed"
,    EstimationAccepted = "EstimationAccepted"
,    EstimationRejected = "EstimationRejected"
,    EstimationUpdated = "EstimationUpdated"
,    EstimationDownloadedAsPdf = "EstimationDownloadedAsPdf"
}


export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=EstimationId" })
  estimationId?: number;

  @Metadata({ data: "json, name=EstimationNumber" })
  estimationNumber?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=InvoiceId" })
  invoiceId?: number;

  @Metadata({ data: "json, name=InvoiceNumber" })
  invoiceNumber?: string;

  @Metadata({ data: "json, name=Link" })
  link?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OrderId" })
  orderId?: number;

  @Metadata({ data: "json, name=OrderNumber" })
  orderNumber?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ActivityTypeEnum;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
