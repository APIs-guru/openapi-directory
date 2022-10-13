from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditcasesubcategory


@dataclass_json
@dataclass
class AuditCaseCategoryRelation:
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_id' }})
    primary_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_category_name' }})
    sub_category_list: Optional[List[auditcasesubcategory.AuditCaseSubCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_category_list' }})
    
