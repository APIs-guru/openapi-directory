from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditCategoryRelation:
    sub_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_category_id' }})
    sub_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_category_name' }})
    
