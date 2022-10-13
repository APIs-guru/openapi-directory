from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import functionconfiguration


@dataclass_json
@dataclass
class ListVersionsByFunctionResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    versions: Optional[List[functionconfiguration.FunctionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Versions' }})
    
