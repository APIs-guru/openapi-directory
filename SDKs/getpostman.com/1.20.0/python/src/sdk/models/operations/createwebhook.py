from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateWebhookQueryParams:
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateWebhookRequestBodyWebhook:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CreateWebhookRequestBody:
    webhook: Optional[CreateWebhookRequestBodyWebhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    

@dataclass
class CreateWebhookRequest:
    query_params: CreateWebhookQueryParams = field(default=None)
    request: Optional[CreateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
