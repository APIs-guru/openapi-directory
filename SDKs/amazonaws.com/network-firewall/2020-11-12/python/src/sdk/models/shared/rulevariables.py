from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleVariables:
    r"""RuleVariables
    Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
    """
    
    ip_sets: Optional[dict[str, IPSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSets') }})
    port_sets: Optional[dict[str, PortSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortSets') }})
    
