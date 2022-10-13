from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetConnectorResourceResponse:
    data: shared.ConnectorResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[shared.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
