from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyparameter


@dataclass_json
@dataclass
class ReviewPolicy:
    parameters: Optional[List[policyparameter.PolicyParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    
