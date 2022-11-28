from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetWebhookPathParams:
    webhook_gid: str = field(metadata={'path_param': { 'field_name': 'webhook_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhookQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetWebhook200ApplicationJSON:
    data: Optional[shared.WebhookResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetWebhookRequest:
    path_params: GetWebhookPathParams = field()
    query_params: GetWebhookQueryParams = field()
    

@dataclass
class GetWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_webhook_200_application_json_object: Optional[GetWebhook200ApplicationJSON] = field(default=None)
    
