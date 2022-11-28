from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateLongTermPricingRequest:
    long_term_pricing_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    replacement_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementJob') }})
    
