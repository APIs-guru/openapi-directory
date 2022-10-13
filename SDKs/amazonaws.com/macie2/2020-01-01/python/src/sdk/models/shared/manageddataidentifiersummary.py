from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sensitivedataitemcategory_enum


@dataclass_json
@dataclass
class ManagedDataIdentifierSummary:
    category: Optional[sensitivedataitemcategory_enum.SensitiveDataItemCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
