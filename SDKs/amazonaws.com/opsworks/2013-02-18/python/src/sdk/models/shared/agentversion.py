from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentVersion:
    r"""AgentVersion
    Describes an agent version.
    """
    
    configuration_manager: Optional[StackConfigurationManager] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationManager') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
