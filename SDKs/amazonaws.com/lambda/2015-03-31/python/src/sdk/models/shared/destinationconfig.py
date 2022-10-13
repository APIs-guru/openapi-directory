from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import onfailure
from . import onsuccess


@dataclass_json
@dataclass
class DestinationConfig:
    on_failure: Optional[onfailure.OnFailure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnFailure' }})
    on_success: Optional[onsuccess.OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnSuccess' }})
    
