from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAbusesAbuseIDMessagesPathParams:
    abuse_id: int = field(metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAbusesAbuseIDMessagesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetAbusesAbuseIDMessages200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetAbusesAbuseIDMessagesRequest:
    path_params: GetAbusesAbuseIDMessagesPathParams = field()
    security: GetAbusesAbuseIDMessagesSecurity = field()
    

@dataclass
class GetAbusesAbuseIDMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    get_abuses_abuse_id_messages_200_application_json_object: Optional[GetAbusesAbuseIDMessages200ApplicationJSON] = field(default=None)
    
