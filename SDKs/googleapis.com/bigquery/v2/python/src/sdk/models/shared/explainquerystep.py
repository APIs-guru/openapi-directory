from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExplainQueryStep:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    substeps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substeps' }})
    
