from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AcEntryDto:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountCode' }})
    analysis_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisCategoryId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
