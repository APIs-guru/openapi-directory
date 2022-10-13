from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import propertygroup


@dataclass_json
@dataclass
class EnvironmentProperties:
    property_groups: List[propertygroup.PropertyGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyGroups' }})
    
