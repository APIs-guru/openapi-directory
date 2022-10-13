from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import privatednsnamespaceproperties
from . import tag


@dataclass_json
@dataclass
class CreatePrivateDNSNamespaceRequest:
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    properties: Optional[privatednsnamespaceproperties.PrivateDNSNamespaceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Vpc' }})
    
