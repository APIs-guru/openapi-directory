from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvCardDetails:
    card_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_type' }})
    exp_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_month' }})
    exp_year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_year' }})
    last4: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last4' }})
    
