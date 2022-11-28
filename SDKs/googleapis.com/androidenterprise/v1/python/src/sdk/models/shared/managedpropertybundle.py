from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedPropertyBundle:
    r"""ManagedPropertyBundle
    A bundle of managed properties.
    """
    
    managed_property: Optional[List[ManagedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedProperty') }})
    
