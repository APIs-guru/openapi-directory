from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import orderby_enum


@dataclass_json
@dataclass
class DescribeLogStreamsRequest:
    descending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descending' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamNamePrefix' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    order_by: Optional[orderby_enum.OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    
