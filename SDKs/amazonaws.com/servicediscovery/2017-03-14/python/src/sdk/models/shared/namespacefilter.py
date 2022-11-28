from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamespaceFilter:
    r"""NamespaceFilter
    A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
    """
    
    name: NamespaceFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    condition: Optional[FilterConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    
