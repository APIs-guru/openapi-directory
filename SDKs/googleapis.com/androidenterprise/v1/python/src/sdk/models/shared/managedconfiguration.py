from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedConfiguration:
    r"""ManagedConfiguration
    A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
    """
    
    configuration_variables: Optional[ConfigurationVariables] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationVariables') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    managed_property: Optional[List[ManagedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedProperty') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
