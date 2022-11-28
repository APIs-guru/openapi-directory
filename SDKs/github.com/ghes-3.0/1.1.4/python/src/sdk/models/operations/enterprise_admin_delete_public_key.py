from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePublicKeyPathParams:
    key_ids: str = field(metadata={'path_param': { 'field_name': 'key_ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePublicKeyRequest:
    path_params: EnterpriseAdminDeletePublicKeyPathParams = field()
    

@dataclass
class EnterpriseAdminDeletePublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
