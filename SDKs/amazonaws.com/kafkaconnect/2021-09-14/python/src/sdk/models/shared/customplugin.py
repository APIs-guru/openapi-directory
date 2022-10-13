from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomPlugin:
    custom_plugin_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPluginArn' }})
    revision: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
