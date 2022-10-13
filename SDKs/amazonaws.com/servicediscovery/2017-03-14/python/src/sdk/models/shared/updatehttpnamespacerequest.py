from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httpnamespacechange


@dataclass_json
@dataclass
class UpdateHTTPNamespaceRequest:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    namespace: httpnamespacechange.HTTPNamespaceChange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    updater_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdaterRequestId' }})
    
