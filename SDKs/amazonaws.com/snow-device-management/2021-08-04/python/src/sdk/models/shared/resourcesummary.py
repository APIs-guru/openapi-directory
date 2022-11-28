from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceSummary:
    r"""ResourceSummary
    A summary of a resource available on the device.
    """
    
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
