from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rebootrequest


@dataclass_json
@dataclass
class RebootWorkspacesRequest:
    reboot_workspace_requests: List[rebootrequest.RebootRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebootWorkspaceRequests' }})
    
