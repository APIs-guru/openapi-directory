from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteUsersMeAvatarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersMeAvatarRequest:
    security: DeleteUsersMeAvatarSecurity = field()
    

@dataclass
class DeleteUsersMeAvatarResponse:
    content_type: str = field()
    status_code: int = field()
    
