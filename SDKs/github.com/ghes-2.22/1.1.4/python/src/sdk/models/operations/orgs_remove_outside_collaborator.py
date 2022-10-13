from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class OrgsRemoveOutsideCollaboratorPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveOutsideCollaboratorRequest:
    path_params: OrgsRemoveOutsideCollaboratorPathParams = field(default=None)
    

@dataclass_json
@dataclass
class OrgsRemoveOutsideCollaborator422ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class OrgsRemoveOutsideCollaboratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    orgs_remove_outside_collaborator_422_application_json_object: Optional[OrgsRemoveOutsideCollaborator422ApplicationJSON] = field(default=None)
    
