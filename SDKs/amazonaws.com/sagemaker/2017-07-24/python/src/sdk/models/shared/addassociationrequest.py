from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import associationedgetype_enum


@dataclass_json
@dataclass
class AddAssociationRequest:
    association_type: Optional[associationedgetype_enum.AssociationEdgeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationType' }})
    destination_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    
