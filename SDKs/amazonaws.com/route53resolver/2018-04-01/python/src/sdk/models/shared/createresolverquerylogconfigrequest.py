from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateResolverQueryLogConfigRequest:
    creator_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    destination_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
