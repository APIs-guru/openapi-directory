from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterResourceRequest:
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    use_service_linked_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseServiceLinkedRole') }})
    
