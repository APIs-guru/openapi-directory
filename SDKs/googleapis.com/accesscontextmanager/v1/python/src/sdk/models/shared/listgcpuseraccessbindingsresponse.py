from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gcpuseraccessbinding


@dataclass_json
@dataclass
class ListGcpUserAccessBindingsResponse:
    gcp_user_access_bindings: Optional[List[gcpuseraccessbinding.GcpUserAccessBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpUserAccessBindings' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
