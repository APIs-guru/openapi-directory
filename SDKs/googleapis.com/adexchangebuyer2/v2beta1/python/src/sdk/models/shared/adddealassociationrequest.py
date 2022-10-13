from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import creativedealassociation


@dataclass_json
@dataclass
class AddDealAssociationRequest:
    association: Optional[creativedealassociation.CreativeDealAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'association' }})
    
