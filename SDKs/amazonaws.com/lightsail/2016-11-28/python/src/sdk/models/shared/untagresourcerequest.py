from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UntagResourceRequest:
    resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    tag_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagKeys') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    
