package shared

type EstimationActivityAPIModelTypeEnum string

const (
	EstimationActivityAPIModelTypeEnumCreated                    EstimationActivityAPIModelTypeEnum = "Created"
	EstimationActivityAPIModelTypeEnumDraft                      EstimationActivityAPIModelTypeEnum = "Draft"
	EstimationActivityAPIModelTypeEnumCloned                     EstimationActivityAPIModelTypeEnum = "Cloned"
	EstimationActivityAPIModelTypeEnumSentViaEmail               EstimationActivityAPIModelTypeEnum = "SentViaEmail"
	EstimationActivityAPIModelTypeEnumSentViaSms                 EstimationActivityAPIModelTypeEnum = "SentViaSms"
	EstimationActivityAPIModelTypeEnumSentReminderViaEmail       EstimationActivityAPIModelTypeEnum = "SentReminderViaEmail"
	EstimationActivityAPIModelTypeEnumSentReminderViaSms         EstimationActivityAPIModelTypeEnum = "SentReminderViaSms"
	EstimationActivityAPIModelTypeEnumOpened                     EstimationActivityAPIModelTypeEnum = "Opened"
	EstimationActivityAPIModelTypeEnumViewed                     EstimationActivityAPIModelTypeEnum = "Viewed"
	EstimationActivityAPIModelTypeEnumRejected                   EstimationActivityAPIModelTypeEnum = "Rejected"
	EstimationActivityAPIModelTypeEnumUpdated                    EstimationActivityAPIModelTypeEnum = "Updated"
	EstimationActivityAPIModelTypeEnumPaid                       EstimationActivityAPIModelTypeEnum = "Paid"
	EstimationActivityAPIModelTypeEnumUnpaid                     EstimationActivityAPIModelTypeEnum = "Unpaid"
	EstimationActivityAPIModelTypeEnumOverdue                    EstimationActivityAPIModelTypeEnum = "Overdue"
	EstimationActivityAPIModelTypeEnumNewManualPayment           EstimationActivityAPIModelTypeEnum = "NewManualPayment"
	EstimationActivityAPIModelTypeEnumNewPaymentWithPaypal       EstimationActivityAPIModelTypeEnum = "NewPaymentWithPaypal"
	EstimationActivityAPIModelTypeEnumNewPaymentWithStripe       EstimationActivityAPIModelTypeEnum = "NewPaymentWithStripe"
	EstimationActivityAPIModelTypeEnumNewPaymentWithPayoneer     EstimationActivityAPIModelTypeEnum = "NewPaymentWithPayoneer"
	EstimationActivityAPIModelTypeEnumSentToAccountant           EstimationActivityAPIModelTypeEnum = "SentToAccountant"
	EstimationActivityAPIModelTypeEnumDownloadedAsPdf            EstimationActivityAPIModelTypeEnum = "DownloadedAsPdf"
	EstimationActivityAPIModelTypeEnumMarkAsPaidByTheClient      EstimationActivityAPIModelTypeEnum = "MarkAsPaidByTheClient"
	EstimationActivityAPIModelTypeEnumOpenedAttachment           EstimationActivityAPIModelTypeEnum = "OpenedAttachment"
	EstimationActivityAPIModelTypeEnumNewPaymentWithSquare       EstimationActivityAPIModelTypeEnum = "NewPaymentWithSquare"
	EstimationActivityAPIModelTypeEnumNewPaymentWithKlikAndPay   EstimationActivityAPIModelTypeEnum = "NewPaymentWithKlikAndPay"
	EstimationActivityAPIModelTypeEnumNewPaymentWithRazorpay     EstimationActivityAPIModelTypeEnum = "NewPaymentWithRazorpay"
	EstimationActivityAPIModelTypeEnumNewPaymentWithWepay        EstimationActivityAPIModelTypeEnum = "NewPaymentWithWepay"
	EstimationActivityAPIModelTypeEnumNewPaymentWithHalkbank     EstimationActivityAPIModelTypeEnum = "NewPaymentWithHalkbank"
	EstimationActivityAPIModelTypeEnumChangeStatus               EstimationActivityAPIModelTypeEnum = "ChangeStatus"
	EstimationActivityAPIModelTypeEnumOrderUpdated               EstimationActivityAPIModelTypeEnum = "OrderUpdated"
	EstimationActivityAPIModelTypeEnumOrderCreated               EstimationActivityAPIModelTypeEnum = "OrderCreated"
	EstimationActivityAPIModelTypeEnumNewPaymentWithTwoCheckout  EstimationActivityAPIModelTypeEnum = "NewPaymentWithTwoCheckout"
	EstimationActivityAPIModelTypeEnumNewPaymentWithPaymentWall  EstimationActivityAPIModelTypeEnum = "NewPaymentWithPaymentWall"
	EstimationActivityAPIModelTypeEnumNewPaymentWithBamboraEu    EstimationActivityAPIModelTypeEnum = "NewPaymentWithBamboraEU"
	EstimationActivityAPIModelTypeEnumNewPaymentWithBamboraNa    EstimationActivityAPIModelTypeEnum = "NewPaymentWithBamboraNA"
	EstimationActivityAPIModelTypeEnumVoid                       EstimationActivityAPIModelTypeEnum = "Void"
	EstimationActivityAPIModelTypeEnumNewPaymentWithNlb          EstimationActivityAPIModelTypeEnum = "NewPaymentWithNlb"
	EstimationActivityAPIModelTypeEnumNewPaymentWithAuthorizeNet EstimationActivityAPIModelTypeEnum = "NewPaymentWithAuthorizeNet"
	EstimationActivityAPIModelTypeEnumNewPaymentWithBraintree    EstimationActivityAPIModelTypeEnum = "NewPaymentWithBraintree"
	EstimationActivityAPIModelTypeEnumEstimationCreated          EstimationActivityAPIModelTypeEnum = "EstimationCreated"
	EstimationActivityAPIModelTypeEnumEstimationDraft            EstimationActivityAPIModelTypeEnum = "EstimationDraft"
	EstimationActivityAPIModelTypeEnumEstimationCloned           EstimationActivityAPIModelTypeEnum = "EstimationCloned"
	EstimationActivityAPIModelTypeEnumEstimationSentViaEmail     EstimationActivityAPIModelTypeEnum = "EstimationSentViaEmail"
	EstimationActivityAPIModelTypeEnumEstimationOpened           EstimationActivityAPIModelTypeEnum = "EstimationOpened"
	EstimationActivityAPIModelTypeEnumEstimationViewed           EstimationActivityAPIModelTypeEnum = "EstimationViewed"
	EstimationActivityAPIModelTypeEnumEstimationAccepted         EstimationActivityAPIModelTypeEnum = "EstimationAccepted"
	EstimationActivityAPIModelTypeEnumEstimationRejected         EstimationActivityAPIModelTypeEnum = "EstimationRejected"
	EstimationActivityAPIModelTypeEnumEstimationUpdated          EstimationActivityAPIModelTypeEnum = "EstimationUpdated"
	EstimationActivityAPIModelTypeEnumEstimationDownloadedAsPdf  EstimationActivityAPIModelTypeEnum = "EstimationDownloadedAsPdf"
)

type EstimationActivityAPIModel struct {
	EstimationNumber *string                             `json:"EstimationNumber"`
	ID               *int32                              `json:"Id"`
	Link             *string                             `json:"Link"`
	Message          *string                             `json:"Message"`
	Type             *EstimationActivityAPIModelTypeEnum `json:"Type"`
}
