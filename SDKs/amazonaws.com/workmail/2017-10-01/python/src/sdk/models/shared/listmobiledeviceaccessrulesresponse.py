from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mobiledeviceaccessrule


@dataclass_json
@dataclass
class ListMobileDeviceAccessRulesResponse:
    rules: Optional[List[mobiledeviceaccessrule.MobileDeviceAccessRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
