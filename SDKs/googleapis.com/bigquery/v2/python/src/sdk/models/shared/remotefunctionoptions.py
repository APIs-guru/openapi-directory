from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoteFunctionOptions:
    connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    max_batching_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBatchingRows' }})
    user_defined_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedContext' }})
    
