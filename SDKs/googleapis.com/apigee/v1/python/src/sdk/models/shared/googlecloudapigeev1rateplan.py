from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1raterange
from . import googletypemoney
from . import googlecloudapigeev1revenuesharerange
from . import googletypemoney

class GoogleCloudApigeeV1RatePlanBillingPeriodEnum(str, Enum):
    BILLING_PERIOD_UNSPECIFIED = "BILLING_PERIOD_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"

class GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum(str, Enum):
    CONSUMPTION_PRICING_TYPE_UNSPECIFIED = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED"
    FIXED_PER_UNIT = "FIXED_PER_UNIT"
    BANDED = "BANDED"
    TIERED = "TIERED"
    STAIRSTEP = "STAIRSTEP"

class GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum(str, Enum):
    PAYMENT_FUNDING_MODEL_UNSPECIFIED = "PAYMENT_FUNDING_MODEL_UNSPECIFIED"
    PREPAID = "PREPAID"
    POSTPAID = "POSTPAID"

class GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum(str, Enum):
    REVENUE_SHARE_TYPE_UNSPECIFIED = "REVENUE_SHARE_TYPE_UNSPECIFIED"
    FIXED = "FIXED"
    VOLUME_BANDED = "VOLUME_BANDED"

class GoogleCloudApigeeV1RatePlanStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RatePlan:
    apiproduct: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiproduct' }})
    billing_period: Optional[GoogleCloudApigeeV1RatePlanBillingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriod' }})
    consumption_pricing_rates: Optional[List[googlecloudapigeev1raterange.GoogleCloudApigeeV1RateRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumptionPricingRates' }})
    consumption_pricing_type: Optional[GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumptionPricingType' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    fixed_fee_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedFeeFrequency' }})
    fixed_recurring_fee: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedRecurringFee' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payment_funding_model: Optional[GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentFundingModel' }})
    revenue_share_rates: Optional[List[googlecloudapigeev1revenuesharerange.GoogleCloudApigeeV1RevenueShareRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueShareRates' }})
    revenue_share_type: Optional[GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueShareType' }})
    setup_fee: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupFee' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudApigeeV1RatePlanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
