from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateHitReviewStatusRequest:
    hit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    revert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revert') }})
    
