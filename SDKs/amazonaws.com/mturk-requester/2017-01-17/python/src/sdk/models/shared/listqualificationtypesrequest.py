from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListQualificationTypesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    must_be_owned_by_caller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MustBeOwnedByCaller' }})
    must_be_requestable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MustBeRequestable' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Query' }})
    
