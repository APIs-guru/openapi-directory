from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteScimGroupFromEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
