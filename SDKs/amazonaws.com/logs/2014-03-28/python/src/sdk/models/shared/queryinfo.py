from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import querystatus_enum


@dataclass_json
@dataclass
class QueryInfo:
    create_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryId' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    status: Optional[querystatus_enum.QueryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
