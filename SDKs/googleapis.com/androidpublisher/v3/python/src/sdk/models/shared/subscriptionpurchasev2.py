from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SubscriptionPurchaseV2AcknowledgementStateEnum(str, Enum):
    ACKNOWLEDGEMENT_STATE_UNSPECIFIED = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
    ACKNOWLEDGEMENT_STATE_PENDING = "ACKNOWLEDGEMENT_STATE_PENDING"
    ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"

class SubscriptionPurchaseV2SubscriptionStateEnum(str, Enum):
    SUBSCRIPTION_STATE_UNSPECIFIED = "SUBSCRIPTION_STATE_UNSPECIFIED"
    SUBSCRIPTION_STATE_PENDING = "SUBSCRIPTION_STATE_PENDING"
    SUBSCRIPTION_STATE_ACTIVE = "SUBSCRIPTION_STATE_ACTIVE"
    SUBSCRIPTION_STATE_PAUSED = "SUBSCRIPTION_STATE_PAUSED"
    SUBSCRIPTION_STATE_IN_GRACE_PERIOD = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD"
    SUBSCRIPTION_STATE_ON_HOLD = "SUBSCRIPTION_STATE_ON_HOLD"
    SUBSCRIPTION_STATE_CANCELED = "SUBSCRIPTION_STATE_CANCELED"
    SUBSCRIPTION_STATE_EXPIRED = "SUBSCRIPTION_STATE_EXPIRED"


@dataclass_json
@dataclass
class SubscriptionPurchaseV2:
    r"""SubscriptionPurchaseV2
    Indicates the status of a user's subscription purchase.
    """
    
    acknowledgement_state: Optional[SubscriptionPurchaseV2AcknowledgementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgementState') }})
    canceled_state_context: Optional[CanceledStateContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceledStateContext') }})
    external_account_identifiers: Optional[ExternalAccountIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountIdentifiers') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    latest_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestOrderId') }})
    line_items: Optional[List[SubscriptionPurchaseLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    linked_purchase_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPurchaseToken') }})
    paused_state_context: Optional[PausedStateContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausedStateContext') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    subscribe_with_google_info: Optional[SubscribeWithGoogleInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribeWithGoogleInfo') }})
    subscription_state: Optional[SubscriptionPurchaseV2SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionState') }})
    test_purchase: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPurchase') }})
    
