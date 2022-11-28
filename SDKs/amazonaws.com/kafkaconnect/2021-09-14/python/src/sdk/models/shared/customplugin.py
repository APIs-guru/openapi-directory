from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomPlugin:
    r"""CustomPlugin
    A plugin is an AWS resource that contains the code that defines a connector's logic.
    """
    
    custom_plugin_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPluginArn') }})
    revision: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
