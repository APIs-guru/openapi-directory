from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import eventdimensions
from . import filtertype_enum


@dataclass_json
@dataclass
class EventFilter:
    dimensions: eventdimensions.EventDimensions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    filter_type: filtertype_enum.FilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterType' }})
    
