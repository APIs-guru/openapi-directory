from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceassociation


@dataclass_json
@dataclass
class DescribeEffectiveInstanceAssociationsResult:
    associations: Optional[List[instanceassociation.InstanceAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Associations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
