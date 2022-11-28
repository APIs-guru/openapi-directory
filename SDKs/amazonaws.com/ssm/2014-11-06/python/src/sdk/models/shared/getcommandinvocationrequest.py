from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetCommandInvocationRequest:
    command_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommandId') }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    plugin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginName') }})
    
