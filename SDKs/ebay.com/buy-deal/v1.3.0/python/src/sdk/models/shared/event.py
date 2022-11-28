from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Event:
    r"""Event
    The result set for the event search.
    """
    
    applicable_coupons: Optional[List[Coupon]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableCoupons') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    event_affiliate_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAffiliateWebUrl') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventWebUrl') }})
    images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    terms: Optional[Terms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
