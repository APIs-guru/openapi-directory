from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VatTypeDto:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_not_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNotApplicable' }})
    is_only_zero: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOnlyZero' }})
    
