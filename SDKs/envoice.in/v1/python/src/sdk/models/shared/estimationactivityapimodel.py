from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EstimationActivityAPIModelTypeEnum(str, Enum):
    CREATED = "Created"
    DRAFT = "Draft"
    CLONED = "Cloned"
    SENT_VIA_EMAIL = "SentViaEmail"
    SENT_VIA_SMS = "SentViaSms"
    SENT_REMINDER_VIA_EMAIL = "SentReminderViaEmail"
    SENT_REMINDER_VIA_SMS = "SentReminderViaSms"
    OPENED = "Opened"
    VIEWED = "Viewed"
    REJECTED = "Rejected"
    UPDATED = "Updated"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    NEW_MANUAL_PAYMENT = "NewManualPayment"
    NEW_PAYMENT_WITH_PAYPAL = "NewPaymentWithPaypal"
    NEW_PAYMENT_WITH_STRIPE = "NewPaymentWithStripe"
    NEW_PAYMENT_WITH_PAYONEER = "NewPaymentWithPayoneer"
    SENT_TO_ACCOUNTANT = "SentToAccountant"
    DOWNLOADED_AS_PDF = "DownloadedAsPdf"
    MARK_AS_PAID_BY_THE_CLIENT = "MarkAsPaidByTheClient"
    OPENED_ATTACHMENT = "OpenedAttachment"
    NEW_PAYMENT_WITH_SQUARE = "NewPaymentWithSquare"
    NEW_PAYMENT_WITH_KLIK_AND_PAY = "NewPaymentWithKlikAndPay"
    NEW_PAYMENT_WITH_RAZORPAY = "NewPaymentWithRazorpay"
    NEW_PAYMENT_WITH_WEPAY = "NewPaymentWithWepay"
    NEW_PAYMENT_WITH_HALKBANK = "NewPaymentWithHalkbank"
    CHANGE_STATUS = "ChangeStatus"
    ORDER_UPDATED = "OrderUpdated"
    ORDER_CREATED = "OrderCreated"
    NEW_PAYMENT_WITH_TWO_CHECKOUT = "NewPaymentWithTwoCheckout"
    NEW_PAYMENT_WITH_PAYMENT_WALL = "NewPaymentWithPaymentWall"
    NEW_PAYMENT_WITH_BAMBORA_EU = "NewPaymentWithBamboraEU"
    NEW_PAYMENT_WITH_BAMBORA_NA = "NewPaymentWithBamboraNA"
    VOID = "Void"
    NEW_PAYMENT_WITH_NLB = "NewPaymentWithNlb"
    NEW_PAYMENT_WITH_AUTHORIZE_NET = "NewPaymentWithAuthorizeNet"
    NEW_PAYMENT_WITH_BRAINTREE = "NewPaymentWithBraintree"
    ESTIMATION_CREATED = "EstimationCreated"
    ESTIMATION_DRAFT = "EstimationDraft"
    ESTIMATION_CLONED = "EstimationCloned"
    ESTIMATION_SENT_VIA_EMAIL = "EstimationSentViaEmail"
    ESTIMATION_OPENED = "EstimationOpened"
    ESTIMATION_VIEWED = "EstimationViewed"
    ESTIMATION_ACCEPTED = "EstimationAccepted"
    ESTIMATION_REJECTED = "EstimationRejected"
    ESTIMATION_UPDATED = "EstimationUpdated"
    ESTIMATION_DOWNLOADED_AS_PDF = "EstimationDownloadedAsPdf"


@dataclass_json
@dataclass
class EstimationActivityAPIModel:
    estimation_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimationNumber' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    type: Optional[EstimationActivityAPIModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
