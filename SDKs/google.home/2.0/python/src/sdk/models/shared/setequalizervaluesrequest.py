from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import highshelf1
from . import lowshelf1


@dataclass_json
@dataclass
class SetEqualizerValuesRequest:
    high_shelf: highshelf1.HighShelf1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_shelf' }})
    low_shelf: lowshelf1.LowShelf1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'low_shelf' }})
    
