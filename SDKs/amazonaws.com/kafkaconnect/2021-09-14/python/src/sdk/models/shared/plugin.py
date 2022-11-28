from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Plugin:
    r"""Plugin
    A plugin is an AWS resource that contains the code that defines your connector logic. 
    """
    
    custom_plugin: CustomPlugin = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPlugin') }})
    
