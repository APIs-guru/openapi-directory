from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stream


@dataclass_json
@dataclass
class GetStreamResponse:
    stream: Optional[stream.Stream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    
