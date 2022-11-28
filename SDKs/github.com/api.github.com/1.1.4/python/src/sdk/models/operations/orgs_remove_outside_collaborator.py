from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class OrgsRemoveOutsideCollaboratorPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsRemoveOutsideCollaborator422ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class OrgsRemoveOutsideCollaboratorRequest:
    path_params: OrgsRemoveOutsideCollaboratorPathParams = field()
    

@dataclass
class OrgsRemoveOutsideCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    orgs_remove_outside_collaborator_422_application_json_object: Optional[OrgsRemoveOutsideCollaborator422ApplicationJSON] = field(default=None)
    
