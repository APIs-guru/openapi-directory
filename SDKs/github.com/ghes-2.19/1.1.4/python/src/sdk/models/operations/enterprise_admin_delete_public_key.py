from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePublicKeyPathParams:
    key_ids: str = field(default=None, metadata={'path_param': { 'field_name': 'key_ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePublicKeyRequest:
    path_params: EnterpriseAdminDeletePublicKeyPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeletePublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
