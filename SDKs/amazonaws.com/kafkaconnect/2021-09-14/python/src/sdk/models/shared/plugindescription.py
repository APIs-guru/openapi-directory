from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customplugindescription


@dataclass_json
@dataclass
class PluginDescription:
    custom_plugin: Optional[customplugindescription.CustomPluginDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPlugin' }})
    
