from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import indexunusedreason


@dataclass_json
@dataclass
class SearchStatistics:
    index_unused_reason: Optional[List[indexunusedreason.IndexUnusedReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexUnusedReason' }})
    index_usage_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexUsageMode' }})
    
