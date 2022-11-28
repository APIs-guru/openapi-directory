from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationMemberPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationMemberRequest:
    path_params: DeleteOrganizationMemberPathParams = field()
    

@dataclass
class DeleteOrganizationMemberResponse:
    content_type: str = field()
    status_code: int = field()
    
