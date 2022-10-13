from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import custompluginstate_enum


@dataclass_json
@dataclass
class CreateCustomPluginResponse:
    custom_plugin_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPluginArn' }})
    custom_plugin_state: Optional[custompluginstate_enum.CustomPluginStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPluginState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
