from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AuditLogGetAuditLogPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

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
    path_params: AuditLogGetAuditLogPathParams = field()
    query_params: AuditLogGetAuditLogQueryParams = field()
    

@dataclass
class AuditLogGetAuditLogResponse:
    content_type: str = field()
    status_code: int = field()
    audit_log_events: Optional[List[shared.AuditLogEvent]] = field(default=None)
    
