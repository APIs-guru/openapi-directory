from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetOrganizationAuditlogsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAuditlogsQueryParams:
    audit_log_type: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'auditLogType', 'style': 'form', 'explode': True }})
    config_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'configId', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'environmentId', 'style': 'form', 'explode': True }})
    from_utc_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromUtcDateTime', 'style': 'form', 'explode': True }})
    product_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'productId', 'style': 'form', 'explode': True }})
    to_utc_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'toUtcDateTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationAuditlogsRequest:
    path_params: GetOrganizationAuditlogsPathParams = field(default=None)
    query_params: GetOrganizationAuditlogsQueryParams = field(default=None)
    

@dataclass
class GetOrganizationAuditlogsResponse:
    audit_log_item_models: Optional[List[shared.AuditLogItemModel]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
