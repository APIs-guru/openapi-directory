from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeClientPropertiesResult:
    client_properties_list: Optional[List[ClientPropertiesResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientPropertiesList') }})
    
