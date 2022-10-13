from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activation


@dataclass_json
@dataclass
class DescribeActivationsResult:
    activation_list: Optional[List[activation.Activation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
