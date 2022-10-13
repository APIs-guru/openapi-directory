from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import engineattribute
from . import nodeassociationstatus_enum


@dataclass_json
@dataclass
class DescribeNodeAssociationStatusResponse:
    engine_attributes: Optional[List[engineattribute.EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttributes' }})
    node_association_status: Optional[nodeassociationstatus_enum.NodeAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeAssociationStatus' }})
    
