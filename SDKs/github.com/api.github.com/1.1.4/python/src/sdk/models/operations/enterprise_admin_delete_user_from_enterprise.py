from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteUserFromEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteUserFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteUserFromEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteUserFromEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
