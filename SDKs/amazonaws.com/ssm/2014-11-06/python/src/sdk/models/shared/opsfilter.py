from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import opsfilteroperatortype_enum


@dataclass_json
@dataclass
class OpsFilter:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: Optional[opsfilteroperatortype_enum.OpsFilterOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
