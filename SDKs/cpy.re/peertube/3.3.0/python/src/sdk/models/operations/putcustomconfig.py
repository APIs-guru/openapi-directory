from dataclasses import dataclass, field



@dataclass
class PutCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutCustomConfigRequest:
    security: PutCustomConfigSecurity = field(default=None)
    

@dataclass
class PutCustomConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
