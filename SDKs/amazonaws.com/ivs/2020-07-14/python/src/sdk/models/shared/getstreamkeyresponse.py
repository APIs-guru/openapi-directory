from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamkey


@dataclass_json
@dataclass
class GetStreamKeyResponse:
    stream_key: Optional[streamkey.StreamKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamKey' }})
    
