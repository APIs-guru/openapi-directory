from dataclasses import dataclass, field



@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams:
    abuse_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    abuse_message_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseMessageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDRequest:
    path_params: DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams = field(default=None)
    security: DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity = field(default=None)
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
