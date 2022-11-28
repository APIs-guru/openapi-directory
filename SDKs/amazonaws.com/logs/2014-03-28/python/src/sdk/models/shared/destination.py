from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Destination:
    r"""Destination
    Represents a cross-account destination that receives subscription log events.
    """
    
    access_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    
