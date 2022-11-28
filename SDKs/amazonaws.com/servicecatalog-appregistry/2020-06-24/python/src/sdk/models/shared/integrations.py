from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Integrations:
    r"""Integrations
     The information about the service integration.
    """
    
    resource_group: Optional[ResourceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    
