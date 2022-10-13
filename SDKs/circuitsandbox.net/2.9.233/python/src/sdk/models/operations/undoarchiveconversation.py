from dataclasses import dataclass, field



@dataclass
class UndoArchiveConversationPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UndoArchiveConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UndoArchiveConversationRequest:
    path_params: UndoArchiveConversationPathParams = field(default=None)
    security: UndoArchiveConversationSecurity = field(default=None)
    

@dataclass
class UndoArchiveConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
