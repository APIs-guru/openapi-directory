from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import syncaction_enum


@dataclass_json
@dataclass
class SyncResourceResponse:
    action_taken: Optional[syncaction_enum.SyncActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTaken' }})
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationArn' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    
