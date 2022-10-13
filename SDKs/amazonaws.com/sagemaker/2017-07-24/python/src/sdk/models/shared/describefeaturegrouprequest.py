from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeFeatureGroupRequest:
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
