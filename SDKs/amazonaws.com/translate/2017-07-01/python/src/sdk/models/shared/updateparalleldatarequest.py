from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paralleldataconfig


@dataclass_json
@dataclass
class UpdateParallelDataRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parallel_data_config: paralleldataconfig.ParallelDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataConfig' }})
    
