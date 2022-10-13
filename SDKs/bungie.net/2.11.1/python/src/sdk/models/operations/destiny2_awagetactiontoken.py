from dataclasses import dataclass, field



@dataclass
class Destiny2AwaGetActionTokenPathParams:
    correlation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'correlationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2AwaGetActionTokenSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2AwaGetActionTokenRequest:
    path_params: Destiny2AwaGetActionTokenPathParams = field(default=None)
    security: Destiny2AwaGetActionTokenSecurity = field(default=None)
    

@dataclass
class Destiny2AwaGetActionTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
