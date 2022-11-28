from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VpcAccessConnectorEgressSettingEnum(str, Enum):
    EGRESS_SETTING_UNSPECIFIED = "EGRESS_SETTING_UNSPECIFIED"
    ALL_TRAFFIC = "ALL_TRAFFIC"
    PRIVATE_IP_RANGES = "PRIVATE_IP_RANGES"


@dataclass_json
@dataclass
class VpcAccessConnector:
    r"""VpcAccessConnector
    VPC access connector specification.
    """
    
    egress_setting: Optional[VpcAccessConnectorEgressSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressSetting') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
