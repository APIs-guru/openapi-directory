from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import examplepayload


@dataclass_json
@dataclass
class PredictRequest:
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    payload: Optional[examplepayload.ExamplePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    
