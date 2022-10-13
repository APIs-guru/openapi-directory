from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example16:
    bytes_received: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytes_received' }})
    response_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_code' }})
    time_for_data_fetch: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_for_data_fetch' }})
    time_for_http_response: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_for_http_response' }})
    
