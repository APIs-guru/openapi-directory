from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import instancepatchstateoperatortype_enum


@dataclass_json
@dataclass
class InstancePatchStateFilter:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: instancepatchstateoperatortype_enum.InstancePatchStateOperatorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
