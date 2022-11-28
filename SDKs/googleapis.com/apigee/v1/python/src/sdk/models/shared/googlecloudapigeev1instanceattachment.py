from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceAttachmentInput:
    r"""GoogleCloudApigeeV1InstanceAttachmentInput
    InstanceAttachment represents the installation of an environment onto an instance.
    """
    
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceAttachment:
    r"""GoogleCloudApigeeV1InstanceAttachment
    InstanceAttachment represents the installation of an environment onto an instance.
    """
    
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
