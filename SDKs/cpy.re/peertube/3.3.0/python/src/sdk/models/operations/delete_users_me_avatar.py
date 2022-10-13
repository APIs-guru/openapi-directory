from dataclasses import dataclass, field



@dataclass
class DeleteUsersMeAvatarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersMeAvatarRequest:
    security: DeleteUsersMeAvatarSecurity = field(default=None)
    

@dataclass
class DeleteUsersMeAvatarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
