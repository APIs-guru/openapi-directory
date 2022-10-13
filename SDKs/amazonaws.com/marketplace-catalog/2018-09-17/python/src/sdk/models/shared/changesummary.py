from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entity
from . import errordetail


@dataclass_json
@dataclass
class ChangeSummary:
    change_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeName' }})
    change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeType' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    entity: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entity' }})
    error_detail_list: Optional[List[errordetail.ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetailList' }})
    
