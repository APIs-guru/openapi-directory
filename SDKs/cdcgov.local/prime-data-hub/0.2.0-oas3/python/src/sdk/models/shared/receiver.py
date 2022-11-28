from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReceiverJurisdictionalFiltersMatchFieldsEnum(str, Enum):
    FACILITY_OR_PATIENT_ADDRESS = "FACILITY_OR_PATIENT_ADDRESS"
    FACILITY_ADDRESS = "FACILITY_ADDRESS"
    FACILITY_NAME = "FACILITY_NAME"
    ABNORMAL_VALUE = "ABNORMAL_VALUE"


@dataclass_json
@dataclass
class ReceiverJurisdictionalFilters:
    r"""ReceiverJurisdictionalFilters
    A single filter
    """
    
    does_not_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    match_fields: Optional[ReceiverJurisdictionalFiltersMatchFieldsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchFields') }})
    match_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchValues') }})
    
class ReceiverTimingFrequencyEnum(str, Enum):
    REAL_TIME = "REAL_TIME"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class ReceiverTiming:
    r"""ReceiverTiming
    When the report is sent if not immediately
    """
    
    frequency: ReceiverTimingFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    daily_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyAt') }})
    

@dataclass_json
@dataclass
class ReceiverInput:
    r"""ReceiverInput
    A receiver of reports from the data hub
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timing: ReceiverTiming = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    jurisdictional_filters: Optional[List[ReceiverJurisdictionalFilters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdictionalFilters') }})
    translations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    

@dataclass_json
@dataclass
class Receiver:
    r"""Receiver
    A receiver of reports from the data hub
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timing: ReceiverTiming = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    jurisdictional_filters: Optional[List[ReceiverJurisdictionalFilters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdictionalFilters') }})
    meta: Optional[SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    translations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
