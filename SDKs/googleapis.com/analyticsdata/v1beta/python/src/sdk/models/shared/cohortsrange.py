from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CohortsRangeGranularityEnum(str, Enum):
    GRANULARITY_UNSPECIFIED = "GRANULARITY_UNSPECIFIED"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"


@dataclass_json
@dataclass
class CohortsRange:
    r"""CohortsRange
    Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
    """
    
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOffset') }})
    granularity: Optional[CohortsRangeGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('granularity') }})
    start_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startOffset') }})
    
