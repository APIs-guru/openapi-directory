from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import settingmetadata
from . import customconfiguration
from . import standardhl7configuration

class ReceiverJurisdictionalFiltersMatchFieldsEnum(str, Enum):
    FACILITY_OR_PATIENT_ADDRESS = "FACILITY_OR_PATIENT_ADDRESS"
    FACILITY_ADDRESS = "FACILITY_ADDRESS"
    FACILITY_NAME = "FACILITY_NAME"
    ABNORMAL_VALUE = "ABNORMAL_VALUE"


@dataclass_json
@dataclass
class ReceiverJurisdictionalFilters:
    does_not_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doesNotMatch' }})
    match_fields: Optional[ReceiverJurisdictionalFiltersMatchFieldsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchFields' }})
    match_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchValues' }})
    
class ReceiverTimingFrequencyEnum(str, Enum):
    REAL_TIME = "REAL_TIME"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class ReceiverTiming:
    daily_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyAt' }})
    frequency: ReceiverTimingFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    

@dataclass_json
@dataclass
class Receiver:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    jurisdictional_filters: Optional[List[ReceiverJurisdictionalFilters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jurisdictionalFilters' }})
    meta: Optional[settingmetadata.SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationName' }})
    timing: ReceiverTiming = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    translations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    
