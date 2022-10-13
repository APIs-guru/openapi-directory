from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adjustment


@dataclass_json
@dataclass
class Cvss:
    adjustments: Optional[List[adjustment.Adjustment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Adjustments' }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseScore' }})
    base_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseVector' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
