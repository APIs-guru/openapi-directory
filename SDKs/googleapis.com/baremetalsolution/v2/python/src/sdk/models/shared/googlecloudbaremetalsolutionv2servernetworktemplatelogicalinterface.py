from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum(str, Enum):
    INTERFACE_TYPE_UNSPECIFIED = "INTERFACE_TYPE_UNSPECIFIED"
    BOND = "BOND"
    NIC = "NIC"


@dataclass_json
@dataclass
class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface:
    r"""GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface
    Logical interface.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: Optional[GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
