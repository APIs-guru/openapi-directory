from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicesetting


@dataclass_json
@dataclass
class ResetServiceSettingResult:
    service_setting: Optional[servicesetting.ServiceSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceSetting' }})
    
