from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocumentList:
    documents: List[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
