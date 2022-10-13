package shared

type ActivityTypeEnum string

const (
	ActivityTypeEnumCreated                    ActivityTypeEnum = "Created"
	ActivityTypeEnumDraft                      ActivityTypeEnum = "Draft"
	ActivityTypeEnumCloned                     ActivityTypeEnum = "Cloned"
	ActivityTypeEnumSentViaEmail               ActivityTypeEnum = "SentViaEmail"
	ActivityTypeEnumSentViaSms                 ActivityTypeEnum = "SentViaSms"
	ActivityTypeEnumSentReminderViaEmail       ActivityTypeEnum = "SentReminderViaEmail"
	ActivityTypeEnumSentReminderViaSms         ActivityTypeEnum = "SentReminderViaSms"
	ActivityTypeEnumOpened                     ActivityTypeEnum = "Opened"
	ActivityTypeEnumViewed                     ActivityTypeEnum = "Viewed"
	ActivityTypeEnumRejected                   ActivityTypeEnum = "Rejected"
	ActivityTypeEnumUpdated                    ActivityTypeEnum = "Updated"
	ActivityTypeEnumPaid                       ActivityTypeEnum = "Paid"
	ActivityTypeEnumUnpaid                     ActivityTypeEnum = "Unpaid"
	ActivityTypeEnumOverdue                    ActivityTypeEnum = "Overdue"
	ActivityTypeEnumNewManualPayment           ActivityTypeEnum = "NewManualPayment"
	ActivityTypeEnumNewPaymentWithPaypal       ActivityTypeEnum = "NewPaymentWithPaypal"
	ActivityTypeEnumNewPaymentWithStripe       ActivityTypeEnum = "NewPaymentWithStripe"
	ActivityTypeEnumNewPaymentWithPayoneer     ActivityTypeEnum = "NewPaymentWithPayoneer"
	ActivityTypeEnumSentToAccountant           ActivityTypeEnum = "SentToAccountant"
	ActivityTypeEnumDownloadedAsPdf            ActivityTypeEnum = "DownloadedAsPdf"
	ActivityTypeEnumMarkAsPaidByTheClient      ActivityTypeEnum = "MarkAsPaidByTheClient"
	ActivityTypeEnumOpenedAttachment           ActivityTypeEnum = "OpenedAttachment"
	ActivityTypeEnumNewPaymentWithSquare       ActivityTypeEnum = "NewPaymentWithSquare"
	ActivityTypeEnumNewPaymentWithKlikAndPay   ActivityTypeEnum = "NewPaymentWithKlikAndPay"
	ActivityTypeEnumNewPaymentWithRazorpay     ActivityTypeEnum = "NewPaymentWithRazorpay"
	ActivityTypeEnumNewPaymentWithWepay        ActivityTypeEnum = "NewPaymentWithWepay"
	ActivityTypeEnumNewPaymentWithHalkbank     ActivityTypeEnum = "NewPaymentWithHalkbank"
	ActivityTypeEnumChangeStatus               ActivityTypeEnum = "ChangeStatus"
	ActivityTypeEnumOrderUpdated               ActivityTypeEnum = "OrderUpdated"
	ActivityTypeEnumOrderCreated               ActivityTypeEnum = "OrderCreated"
	ActivityTypeEnumNewPaymentWithTwoCheckout  ActivityTypeEnum = "NewPaymentWithTwoCheckout"
	ActivityTypeEnumNewPaymentWithPaymentWall  ActivityTypeEnum = "NewPaymentWithPaymentWall"
	ActivityTypeEnumNewPaymentWithBamboraEu    ActivityTypeEnum = "NewPaymentWithBamboraEU"
	ActivityTypeEnumNewPaymentWithBamboraNa    ActivityTypeEnum = "NewPaymentWithBamboraNA"
	ActivityTypeEnumVoid                       ActivityTypeEnum = "Void"
	ActivityTypeEnumNewPaymentWithNlb          ActivityTypeEnum = "NewPaymentWithNlb"
	ActivityTypeEnumNewPaymentWithAuthorizeNet ActivityTypeEnum = "NewPaymentWithAuthorizeNet"
	ActivityTypeEnumNewPaymentWithBraintree    ActivityTypeEnum = "NewPaymentWithBraintree"
	ActivityTypeEnumEstimationCreated          ActivityTypeEnum = "EstimationCreated"
	ActivityTypeEnumEstimationDraft            ActivityTypeEnum = "EstimationDraft"
	ActivityTypeEnumEstimationCloned           ActivityTypeEnum = "EstimationCloned"
	ActivityTypeEnumEstimationSentViaEmail     ActivityTypeEnum = "EstimationSentViaEmail"
	ActivityTypeEnumEstimationOpened           ActivityTypeEnum = "EstimationOpened"
	ActivityTypeEnumEstimationViewed           ActivityTypeEnum = "EstimationViewed"
	ActivityTypeEnumEstimationAccepted         ActivityTypeEnum = "EstimationAccepted"
	ActivityTypeEnumEstimationRejected         ActivityTypeEnum = "EstimationRejected"
	ActivityTypeEnumEstimationUpdated          ActivityTypeEnum = "EstimationUpdated"
	ActivityTypeEnumEstimationDownloadedAsPdf  ActivityTypeEnum = "EstimationDownloadedAsPdf"
)

type Activity struct {
	EstimationID     *int32            `json:"EstimationId"`
	EstimationNumber *string           `json:"EstimationNumber"`
	ID               *int32            `json:"Id"`
	InvoiceID        *int32            `json:"InvoiceId"`
	InvoiceNumber    *string           `json:"InvoiceNumber"`
	Link             *string           `json:"Link"`
	Message          *string           `json:"Message"`
	OrderID          *int32            `json:"OrderId"`
	OrderNumber      *string           `json:"OrderNumber"`
	Type             *ActivityTypeEnum `json:"Type"`
	UserID           *int32            `json:"UserId"`
}
