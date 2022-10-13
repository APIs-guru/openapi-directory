from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example11:
    app_device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_device_id' }})
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    signed_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signed_data' }})
    
