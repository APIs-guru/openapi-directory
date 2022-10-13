from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergeRequest:
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    inline_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlinePdf' }})
    urls: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
