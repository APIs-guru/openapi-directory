from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RateRange:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    fee: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
