from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batcherror
from . import streamkey


@dataclass_json
@dataclass
class BatchGetStreamKeyResponse:
    errors: Optional[List[batcherror.BatchError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    stream_keys: Optional[List[streamkey.StreamKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamKeys' }})
    
