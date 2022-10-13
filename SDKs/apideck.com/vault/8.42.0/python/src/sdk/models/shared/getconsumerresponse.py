from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetConsumerResponse:
    data: shared.Consumer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
