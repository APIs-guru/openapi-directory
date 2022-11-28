from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterInstanceRequest:
    attributes: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    
