from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ArchiveConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArchiveConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ArchiveConversationRequest:
    path_params: ArchiveConversationPathParams = field()
    security: ArchiveConversationSecurity = field()
    

@dataclass
class ArchiveConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
