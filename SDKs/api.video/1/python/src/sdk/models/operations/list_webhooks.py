from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListWebhooksQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    events: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'events', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWebhooksSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ListWebhooksRequest:
    query_params: ListWebhooksQueryParams = field(default=None)
    security: ListWebhooksSecurity = field(default=None)
    

@dataclass
class ListWebhooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhooks_list_response: Optional[shared.WebhooksListResponse] = field(default=None)
    
