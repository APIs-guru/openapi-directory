from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompanySettingDto:
    enable_vocr_reporting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableVOCRReporting' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    use_allocations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAllocations' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    vocr_setting_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vocrSettingValue' }})
    
