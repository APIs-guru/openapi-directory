from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlowTemplateFilter:
    r"""FlowTemplateFilter
    An object that filters a workflow search.
    """
    
    name: FlowTemplateFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
