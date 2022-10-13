from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceshareassociation


@dataclass_json
@dataclass
class GetResourceShareAssociationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_share_associations: Optional[List[resourceshareassociation.ResourceShareAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareAssociations' }})
    
