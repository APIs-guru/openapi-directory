from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedproperty


@dataclass_json
@dataclass
class ManagedPropertyBundle:
    managed_property: Optional[List[managedproperty.ManagedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedProperty' }})
    
