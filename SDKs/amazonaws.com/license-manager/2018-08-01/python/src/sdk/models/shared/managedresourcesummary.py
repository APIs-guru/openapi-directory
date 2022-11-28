from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedResourceSummary:
    r"""ManagedResourceSummary
    Summary information about a managed resource.
    """
    
    association_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationCount') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
