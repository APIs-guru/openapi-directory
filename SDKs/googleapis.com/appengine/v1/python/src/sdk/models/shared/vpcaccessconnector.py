from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VpcAccessConnectorEgressSettingEnum(str, Enum):
    EGRESS_SETTING_UNSPECIFIED = "EGRESS_SETTING_UNSPECIFIED"
    ALL_TRAFFIC = "ALL_TRAFFIC"
    PRIVATE_IP_RANGES = "PRIVATE_IP_RANGES"


@dataclass_json
@dataclass
class VpcAccessConnector:
    egress_setting: Optional[VpcAccessConnectorEgressSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressSetting' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
