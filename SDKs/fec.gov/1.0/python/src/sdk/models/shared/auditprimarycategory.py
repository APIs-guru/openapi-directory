from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditPrimaryCategory:
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_id' }})
    primary_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_name' }})
    
