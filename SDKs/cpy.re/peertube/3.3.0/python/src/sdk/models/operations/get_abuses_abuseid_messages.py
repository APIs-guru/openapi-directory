from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAbusesAbuseIDMessagesPathParams:
    abuse_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAbusesAbuseIDMessagesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAbusesAbuseIDMessagesRequest:
    path_params: GetAbusesAbuseIDMessagesPathParams = field(default=None)
    security: GetAbusesAbuseIDMessagesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAbusesAbuseIDMessages200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetAbusesAbuseIDMessagesResponse:
    content_type: str = field(default=None)
    get_abuses_abuse_id_messages_200_application_json_object: Optional[GetAbusesAbuseIDMessages200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
