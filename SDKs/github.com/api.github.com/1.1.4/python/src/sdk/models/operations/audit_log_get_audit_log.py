from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AuditLogGetAuditLogPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuditLogGetAuditLogQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    include: Optional[shared.AuditLogIncludeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    order: Optional[shared.AuditLogOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclass
class AuditLogGetAuditLogRequest:
    path_params: AuditLogGetAuditLogPathParams = field(default=None)
    query_params: AuditLogGetAuditLogQueryParams = field(default=None)
    

@dataclass
class AuditLogGetAuditLogResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    audit_log_events: Optional[List[shared.AuditLogEvent]] = field(default=None)
    
