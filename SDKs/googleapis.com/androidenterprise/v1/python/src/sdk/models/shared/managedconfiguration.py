from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationvariables
from . import managedproperty


@dataclass_json
@dataclass
class ManagedConfiguration:
    configuration_variables: Optional[configurationvariables.ConfigurationVariables] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationVariables' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    managed_property: Optional[List[managedproperty.ManagedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedProperty' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
