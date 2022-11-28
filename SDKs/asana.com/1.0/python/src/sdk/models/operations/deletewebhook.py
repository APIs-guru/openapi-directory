from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteWebhookPathParams:
    webhook_gid: str = field(metadata={'path_param': { 'field_name': 'webhook_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DeleteWebhook200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = field()
    query_params: DeleteWebhookQueryParams = field()
    

@dataclass
class DeleteWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    delete_webhook_200_application_json_object: Optional[DeleteWebhook200ApplicationJSON] = field(default=None)
    
