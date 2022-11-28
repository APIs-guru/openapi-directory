from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsConvertMemberToOutsideCollaboratorPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsConvertMemberToOutsideCollaborator403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorRequest:
    path_params: OrgsConvertMemberToOutsideCollaboratorPathParams = field()
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    orgs_convert_member_to_outside_collaborator_403_application_json_object: Optional[OrgsConvertMemberToOutsideCollaborator403ApplicationJSON] = field(default=None)
    
