from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortSet:
    r"""PortSet
    A set of port ranges for use in the rules in a rule group. 
    """
    
    definition: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    
