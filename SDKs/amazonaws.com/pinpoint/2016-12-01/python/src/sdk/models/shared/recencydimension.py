from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import duration_enum
from . import recencytype_enum


@dataclass_json
@dataclass
class RecencyDimension:
    duration: duration_enum.DurationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    recency_type: recencytype_enum.RecencyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecencyType' }})
    
