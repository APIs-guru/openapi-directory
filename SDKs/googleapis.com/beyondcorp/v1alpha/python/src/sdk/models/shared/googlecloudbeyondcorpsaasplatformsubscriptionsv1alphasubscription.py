from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum(str, Enum):
    SKU_UNSPECIFIED = "SKU_UNSPECIFIED"
    BCE_STANDARD_SKU = "BCE_STANDARD_SKU"

class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TRIAL = "TRIAL"
    PAID = "PAID"
    ALLOWLIST = "ALLOWLIST"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput:
    r"""GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput
    A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sku: Optional[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    type: Optional[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription:
    r"""GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription
    A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
    """
    
    auto_renew_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewEnabled') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    seat_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatCount') }})
    sku: Optional[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
