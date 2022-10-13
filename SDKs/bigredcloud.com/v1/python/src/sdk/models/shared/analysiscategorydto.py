from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnalysisCategoryDto:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountCode' }})
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    category_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTypeId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    order_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderIndex' }})
    
