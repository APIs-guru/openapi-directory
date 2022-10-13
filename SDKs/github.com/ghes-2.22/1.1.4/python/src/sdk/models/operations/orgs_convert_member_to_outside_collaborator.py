from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OrgsConvertMemberToOutsideCollaboratorPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorRequest:
    path_params: OrgsConvertMemberToOutsideCollaboratorPathParams = field(default=None)
    

@dataclass
class OrgsConvertMemberToOutsideCollaboratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    orgs_convert_member_to_outside_collaborator_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
