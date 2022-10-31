from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListGlobalWebhooksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListGlobalWebhooksHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListGlobalWebhooksRequest:
    query_params: EnterpriseAdminListGlobalWebhooksQueryParams = field(default=None)
    headers: EnterpriseAdminListGlobalWebhooksHeaders = field(default=None)
    

@dataclass
class EnterpriseAdminListGlobalWebhooksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    global_hooks: Optional[List[shared.GlobalHook]] = field(default=None)
    
