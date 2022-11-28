from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Record:
    r"""Record
    A description of a unique event within a stream.
    """
    
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    dynamodb: Optional[StreamRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamodb') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventID') }})
    event_name: Optional[OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventVersion') }})
    user_identity: Optional[Identity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIdentity') }})
    
