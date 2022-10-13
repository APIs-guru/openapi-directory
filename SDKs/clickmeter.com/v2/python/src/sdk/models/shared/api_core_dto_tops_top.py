from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_tops_topitem


@dataclass_json
@dataclass
class APICoreDtoTopsTop:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    data: Optional[List[api_core_dto_tops_topitem.APICoreDtoTopsTopItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
