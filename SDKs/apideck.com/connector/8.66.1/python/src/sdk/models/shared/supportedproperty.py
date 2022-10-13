from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedproperty


@dataclass_json
@dataclass
class SupportedPropertyChildProperties:
    unified_property: Optional[supportedproperty.SupportedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_property' }})
    

@dataclass_json
@dataclass
class SupportedProperty:
    child_properties: Optional[List[SupportedPropertyChildProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'child_properties' }})
    unified_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_property' }})
    
