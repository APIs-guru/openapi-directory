from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListStreamsInput:
    exclusive_start_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartStreamArn' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
