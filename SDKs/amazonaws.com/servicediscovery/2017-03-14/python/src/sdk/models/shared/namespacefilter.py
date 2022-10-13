from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filtercondition_enum
from . import namespacefiltername_enum


@dataclass_json
@dataclass
class NamespaceFilter:
    condition: Optional[filtercondition_enum.FilterConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    name: namespacefiltername_enum.NamespaceFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
