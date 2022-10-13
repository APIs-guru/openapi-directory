from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bundle


@dataclass_json
@dataclass
class BundlesListResponse:
    bundles: Optional[List[bundle.Bundle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundles' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
