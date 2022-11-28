from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteUserFromEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteUserFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteUserFromEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminDeleteUserFromEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
