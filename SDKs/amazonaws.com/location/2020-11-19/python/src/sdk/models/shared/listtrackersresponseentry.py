from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTrackersResponseEntry:
    r"""ListTrackersResponseEntry
    Contains the tracker resource details.
    """
    
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: PricingPlanEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    tracker_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackerName') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pricing_plan_data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlanDataSource') }})
    
