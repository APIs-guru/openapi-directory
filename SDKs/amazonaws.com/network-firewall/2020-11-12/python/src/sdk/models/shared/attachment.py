from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attachmentstatus_enum


@dataclass_json
@dataclass
class Attachment:
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    status: Optional[attachmentstatus_enum.AttachmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
