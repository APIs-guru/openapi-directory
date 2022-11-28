from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceArnDetail:
    r"""ResourceArnDetail
    A list of resources ARNs corresponding to the segments in a trace.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ARN') }})
    
