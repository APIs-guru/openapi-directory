import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActivityTypeEnum {
    Created = "Created",
    Draft = "Draft",
    Cloned = "Cloned",
    SentViaEmail = "SentViaEmail",
    SentViaSms = "SentViaSms",
    SentReminderViaEmail = "SentReminderViaEmail",
    SentReminderViaSms = "SentReminderViaSms",
    Opened = "Opened",
    Viewed = "Viewed",
    Rejected = "Rejected",
    Updated = "Updated",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    NewManualPayment = "NewManualPayment",
    NewPaymentWithPaypal = "NewPaymentWithPaypal",
    NewPaymentWithStripe = "NewPaymentWithStripe",
    NewPaymentWithPayoneer = "NewPaymentWithPayoneer",
    SentToAccountant = "SentToAccountant",
    DownloadedAsPdf = "DownloadedAsPdf",
    MarkAsPaidByTheClient = "MarkAsPaidByTheClient",
    OpenedAttachment = "OpenedAttachment",
    NewPaymentWithSquare = "NewPaymentWithSquare",
    NewPaymentWithKlikAndPay = "NewPaymentWithKlikAndPay",
    NewPaymentWithRazorpay = "NewPaymentWithRazorpay",
    NewPaymentWithWepay = "NewPaymentWithWepay",
    NewPaymentWithHalkbank = "NewPaymentWithHalkbank",
    ChangeStatus = "ChangeStatus",
    OrderUpdated = "OrderUpdated",
    OrderCreated = "OrderCreated",
    NewPaymentWithTwoCheckout = "NewPaymentWithTwoCheckout",
    NewPaymentWithPaymentWall = "NewPaymentWithPaymentWall",
    NewPaymentWithBamboraEu = "NewPaymentWithBamboraEU",
    NewPaymentWithBamboraNa = "NewPaymentWithBamboraNA",
    Void = "Void",
    NewPaymentWithNlb = "NewPaymentWithNlb",
    NewPaymentWithAuthorizeNet = "NewPaymentWithAuthorizeNet",
    NewPaymentWithBraintree = "NewPaymentWithBraintree",
    EstimationCreated = "EstimationCreated",
    EstimationDraft = "EstimationDraft",
    EstimationCloned = "EstimationCloned",
    EstimationSentViaEmail = "EstimationSentViaEmail",
    EstimationOpened = "EstimationOpened",
    EstimationViewed = "EstimationViewed",
    EstimationAccepted = "EstimationAccepted",
    EstimationRejected = "EstimationRejected",
    EstimationUpdated = "EstimationUpdated",
    EstimationDownloadedAsPdf = "EstimationDownloadedAsPdf"
}
export declare class Activity extends SpeakeasyBase {
    estimationId?: number;
    estimationNumber?: string;
    id?: number;
    invoiceId?: number;
    invoiceNumber?: string;
    link?: string;
    message?: string;
    orderId?: number;
    orderNumber?: string;
    type?: ActivityTypeEnum;
    userId?: number;
}
