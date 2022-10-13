from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamrecord
from . import operationtype_enum
from . import identity


@dataclass_json
@dataclass
class Record:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    dynamodb: Optional[streamrecord.StreamRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamodb' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventID' }})
    event_name: Optional[operationtype_enum.OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSource' }})
    event_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventVersion' }})
    user_identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIdentity' }})
    
