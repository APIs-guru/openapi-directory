from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteScimGroupFromEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
