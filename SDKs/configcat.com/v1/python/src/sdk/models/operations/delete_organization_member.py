from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationMemberPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationMemberRequest:
    path_params: DeleteOrganizationMemberPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
