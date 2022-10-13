from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LensSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    lens_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensName' }})
    lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensVersion' }})
    
