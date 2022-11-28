from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListWebhooksQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    events: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'events', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWebhooksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ListWebhooksRequest:
    query_params: ListWebhooksQueryParams = field()
    security: ListWebhooksSecurity = field()
    

@dataclass
class ListWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    webhooks_list_response: Optional[shared.WebhooksListResponse] = field(default=None)
    
