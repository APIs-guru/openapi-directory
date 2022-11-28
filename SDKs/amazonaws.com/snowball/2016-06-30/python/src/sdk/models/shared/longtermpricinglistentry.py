from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LongTermPricingListEntry:
    r"""LongTermPricingListEntry
    Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
    """
    
    current_active_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentActiveJob') }})
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    job_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobIds') }})
    long_term_pricing_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    long_term_pricing_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_term_pricing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingStatus') }})
    long_term_pricing_type: Optional[LongTermPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingType') }})
    replacement_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementJob') }})
    snowball_type: Optional[SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    
