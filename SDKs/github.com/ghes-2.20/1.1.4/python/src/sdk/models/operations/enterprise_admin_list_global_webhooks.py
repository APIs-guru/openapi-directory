from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListGlobalWebhooksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListGlobalWebhooksHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListGlobalWebhooksRequest:
    headers: EnterpriseAdminListGlobalWebhooksHeaders = field()
    query_params: EnterpriseAdminListGlobalWebhooksQueryParams = field()
    

@dataclass
class EnterpriseAdminListGlobalWebhooksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    global_hooks: Optional[List[shared.GlobalHook]] = field(default=None)
    
