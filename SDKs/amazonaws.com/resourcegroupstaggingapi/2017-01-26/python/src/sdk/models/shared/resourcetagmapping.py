from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceTagMapping:
    r"""ResourceTagMapping
    A list of resource ARNs and the tags (keys and values) that are associated with each.
    """
    
    compliance_details: Optional[ComplianceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceDetails') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
