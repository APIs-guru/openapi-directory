from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    Information about an AWS service returned by the <a>DescribeServices</a> operation.
    """
    
    categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
