from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum(str, Enum):
    INTERFACE_TYPE_UNSPECIFIED = "INTERFACE_TYPE_UNSPECIFIED"
    BOND = "BOND"
    NIC = "NIC"


@dataclass_json
@dataclass
class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: Optional[GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
