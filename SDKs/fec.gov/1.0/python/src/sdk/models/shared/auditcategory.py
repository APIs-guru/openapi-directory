from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditcategoryrelation


@dataclass_json
@dataclass
class AuditCategory:
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_id' }})
    primary_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_name' }})
    sub_category_list: Optional[List[auditcategoryrelation.AuditCategoryRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_category_list' }})
    
