from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes:
    items: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    
