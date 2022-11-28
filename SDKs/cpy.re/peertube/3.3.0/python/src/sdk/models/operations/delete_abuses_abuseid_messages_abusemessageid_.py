from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams:
    abuse_id: int = field(metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    abuse_message_id: int = field(metadata={'path_param': { 'field_name': 'abuseMessageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDRequest:
    path_params: DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams = field()
    security: DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity = field()
    

@dataclass
class DeleteAbusesAbuseIDMessagesAbuseMessageIDResponse:
    content_type: str = field()
    status_code: int = field()
    
