from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servicetype_enum


@dataclass_json
@dataclass
class GetDimensionKeyDetailsRequest:
    group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    group_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupIdentifier' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    requested_dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedDimensions' }})
    service_type: servicetype_enum.ServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    
