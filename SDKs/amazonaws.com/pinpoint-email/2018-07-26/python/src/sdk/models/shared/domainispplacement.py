from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainIspPlacement:
    inbox_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxPercentage' }})
    inbox_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxRawCount' }})
    isp_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IspName' }})
    spam_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpamPercentage' }})
    spam_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpamRawCount' }})
    
