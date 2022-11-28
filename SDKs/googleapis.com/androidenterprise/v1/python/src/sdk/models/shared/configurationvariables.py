from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationVariables:
    r"""ConfigurationVariables
    A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
    """
    
    mcm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcmId') }})
    variable_set: Optional[List[VariableSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableSet') }})
    
