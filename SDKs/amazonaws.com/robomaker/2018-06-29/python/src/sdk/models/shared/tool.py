from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exitbehavior_enum


@dataclass_json
@dataclass
class Tool:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    exit_behavior: Optional[exitbehavior_enum.ExitBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitBehavior' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stream_output_to_cloud_watch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamOutputToCloudWatch' }})
    stream_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamUI' }})
    
