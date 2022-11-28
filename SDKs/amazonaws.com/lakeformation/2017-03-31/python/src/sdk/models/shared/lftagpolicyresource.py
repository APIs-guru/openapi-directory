from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LfTagPolicyResource:
    r"""LfTagPolicyResource
    A structure containing a list of tag conditions that apply to a resource's tag policy.
    """
    
    expression: List[LfTag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
