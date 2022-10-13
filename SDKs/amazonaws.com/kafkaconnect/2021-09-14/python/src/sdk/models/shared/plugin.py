from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customplugin


@dataclass_json
@dataclass
class Plugin:
    custom_plugin: customplugin.CustomPlugin = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPlugin' }})
    
