from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertygroup


@dataclass_json
@dataclass
class EnvironmentPropertyDescriptions:
    property_group_descriptions: Optional[List[propertygroup.PropertyGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyGroupDescriptions' }})
    
