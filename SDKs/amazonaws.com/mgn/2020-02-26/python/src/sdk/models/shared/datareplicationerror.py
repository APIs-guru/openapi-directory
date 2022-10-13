from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datareplicationerrorstring_enum


@dataclass_json
@dataclass
class DataReplicationError:
    error: Optional[datareplicationerrorstring_enum.DataReplicationErrorStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    raw_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawError' }})
    
