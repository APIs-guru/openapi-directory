from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Definition:
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedName' }})
    
