from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samplevalue
from . import samplevalue


@dataclass_json
@dataclass
class SlotTypeValue:
    sample_value: Optional[samplevalue.SampleValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleValue' }})
    synonyms: Optional[List[samplevalue.SampleValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synonyms' }})
    
