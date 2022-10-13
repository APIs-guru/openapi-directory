from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportfrequencytype_enum


@dataclass_json
@dataclass
class ReportFrequency:
    period: Optional[reportfrequencytype_enum.ReportFrequencyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
