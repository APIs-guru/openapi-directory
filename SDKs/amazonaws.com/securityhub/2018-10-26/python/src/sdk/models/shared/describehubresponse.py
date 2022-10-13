from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeHubResponse:
    auto_enable_controls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoEnableControls' }})
    hub_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HubArn' }})
    subscribed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscribedAt' }})
    
