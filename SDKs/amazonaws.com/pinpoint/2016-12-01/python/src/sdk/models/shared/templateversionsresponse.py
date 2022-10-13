from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import templateversionresponse


@dataclass_json
@dataclass
class TemplateVersionsResponse:
    item: List[templateversionresponse.TemplateVersionResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestID' }})
    
