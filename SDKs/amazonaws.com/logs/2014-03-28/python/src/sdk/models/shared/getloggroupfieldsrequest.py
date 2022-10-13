from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLogGroupFieldsRequest:
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
