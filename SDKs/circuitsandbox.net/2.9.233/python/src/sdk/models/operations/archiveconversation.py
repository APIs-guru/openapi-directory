from dataclasses import dataclass, field



@dataclass
class ArchiveConversationPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArchiveConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ArchiveConversationRequest:
    path_params: ArchiveConversationPathParams = field(default=None)
    security: ArchiveConversationSecurity = field(default=None)
    

@dataclass
class ArchiveConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
