from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoAccountingPlan:
    allowed_personal_domains: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedPersonalDomains' }})
    allowed_personal_urls: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedPersonalUrls' }})
    billing_period_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodEnd' }})
    billing_period_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodStart' }})
    bonus_monthly_events: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bonusMonthlyEvents' }})
    maximum_datapoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumDatapoints' }})
    maximum_guests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumGuests' }})
    monthly_events: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlyEvents' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    recurring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurring' }})
    recurring_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringPeriod' }})
    used_datapoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedDatapoints' }})
    used_monthly_events: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedMonthlyEvents' }})
    
