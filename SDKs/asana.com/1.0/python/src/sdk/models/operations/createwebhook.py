from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateWebhookQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateWebhookRequestBody:
    data: Optional[shared.WebhookRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateWebhook201ApplicationJSON:
    data: Optional[shared.WebhookResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateWebhookRequest:
    query_params: CreateWebhookQueryParams = field()
    request: CreateWebhookRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_webhook_201_application_json_object: Optional[CreateWebhook201ApplicationJSON] = field(default=None)
    
