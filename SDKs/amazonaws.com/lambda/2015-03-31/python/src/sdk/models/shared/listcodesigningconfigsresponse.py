from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codesigningconfig


@dataclass_json
@dataclass
class ListCodeSigningConfigsResponse:
    code_signing_configs: Optional[List[codesigningconfig.CodeSigningConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigs' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
