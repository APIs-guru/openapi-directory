from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReactionRollup:
    plus_1: int = field(default=None, metadata={'dataclasses_json': { 'field_name': '+1' }})
    minus_1: int = field(default=None, metadata={'dataclasses_json': { 'field_name': '-1' }})
    confused: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confused' }})
    eyes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eyes' }})
    heart: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heart' }})
    hooray: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooray' }})
    laugh: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'laugh' }})
    rocket: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rocket' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
