from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2SecurityGroupPrefixListID:
    prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrefixListId' }})
    
