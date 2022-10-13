from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlacementStatistics:
    dkim_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DkimPercentage' }})
    inbox_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxPercentage' }})
    missing_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MissingPercentage' }})
    spam_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpamPercentage' }})
    spf_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpfPercentage' }})
    
