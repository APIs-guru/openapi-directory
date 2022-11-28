from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UndoArchiveConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UndoArchiveConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UndoArchiveConversationRequest:
    path_params: UndoArchiveConversationPathParams = field()
    security: UndoArchiveConversationSecurity = field()
    

@dataclass
class UndoArchiveConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
