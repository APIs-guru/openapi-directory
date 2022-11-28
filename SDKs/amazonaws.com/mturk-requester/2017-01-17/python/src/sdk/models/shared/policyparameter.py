from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyParameter:
    r"""PolicyParameter
     Name of the parameter from the Review policy. 
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    map_entries: Optional[List[ParameterMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MapEntries') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
