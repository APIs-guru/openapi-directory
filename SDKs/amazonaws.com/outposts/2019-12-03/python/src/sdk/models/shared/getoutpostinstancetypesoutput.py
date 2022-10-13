from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancetypeitem


@dataclass_json
@dataclass
class GetOutpostInstanceTypesOutput:
    instance_types: Optional[List[instancetypeitem.InstanceTypeItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceTypes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    outpost_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostArn' }})
    outpost_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostId' }})
    
