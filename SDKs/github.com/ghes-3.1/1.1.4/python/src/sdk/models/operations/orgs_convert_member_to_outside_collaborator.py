from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OrgsConvertMemberToOutsideCollaboratorPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorRequest:
    path_params: OrgsConvertMemberToOutsideCollaboratorPathParams = field()
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    orgs_convert_member_to_outside_collaborator_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
