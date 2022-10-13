from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import policytype_enum


@dataclass_json
@dataclass
class ListPoliciesRequest:
    filter: policytype_enum.PolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
