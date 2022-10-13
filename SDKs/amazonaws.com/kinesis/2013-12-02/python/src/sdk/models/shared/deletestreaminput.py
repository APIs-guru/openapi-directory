from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteStreamInput:
    enforce_consumer_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnforceConsumerDeletion' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
