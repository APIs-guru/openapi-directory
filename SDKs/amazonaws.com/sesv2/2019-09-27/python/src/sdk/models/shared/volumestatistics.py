from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeStatistics:
    inbox_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxRawCount' }})
    projected_inbox: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectedInbox' }})
    projected_spam: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectedSpam' }})
    spam_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpamRawCount' }})
    
