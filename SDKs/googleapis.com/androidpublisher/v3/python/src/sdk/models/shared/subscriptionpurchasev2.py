from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import canceledstatecontext
from . import externalaccountidentifiers
from . import subscriptionpurchaselineitem
from . import pausedstatecontext
from . import subscribewithgoogleinfo

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
    acknowledgement_state: Optional[SubscriptionPurchaseV2AcknowledgementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgementState' }})
    canceled_state_context: Optional[canceledstatecontext.CanceledStateContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceledStateContext' }})
    external_account_identifiers: Optional[externalaccountidentifiers.ExternalAccountIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountIdentifiers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    latest_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestOrderId' }})
    line_items: Optional[List[subscriptionpurchaselineitem.SubscriptionPurchaseLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    linked_purchase_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedPurchaseToken' }})
    paused_state_context: Optional[pausedstatecontext.PausedStateContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausedStateContext' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    subscribe_with_google_info: Optional[subscribewithgoogleinfo.SubscribeWithGoogleInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribeWithGoogleInfo' }})
    subscription_state: Optional[SubscriptionPurchaseV2SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionState' }})
    test_purchase: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPurchase' }})
    
