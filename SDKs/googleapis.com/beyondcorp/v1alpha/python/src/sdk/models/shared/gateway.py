from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GatewayTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GCP_REGIONAL_MIG = "GCP_REGIONAL_MIG"


@dataclass_json
@dataclass
class GatewayInput:
    r"""GatewayInput
    Gateway represents a user facing component that serves as an entrance to enable connectivity.
    """
    
    type: Optional[GatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Gateway:
    r"""Gateway
    Gateway represents a user facing component that serves as an entrance to enable connectivity.
    """
    
    type: Optional[GatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPort') }})
    
