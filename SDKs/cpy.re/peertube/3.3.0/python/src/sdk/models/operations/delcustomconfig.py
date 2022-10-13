from dataclasses import dataclass, field



@dataclass
class DelCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelCustomConfigRequest:
    security: DelCustomConfigSecurity = field(default=None)
    

@dataclass
class DelCustomConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
