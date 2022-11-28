from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetConfigurationsQueryParams:
    created_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$gte]', 'style': 'form', 'explode': True }})
    created_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$lte]', 'style': 'form', 'explode': True }})
    paginate_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_enabled', 'style': 'form', 'explode': True }})
    paginate_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_limit', 'style': 'form', 'explode': True }})
    paginate_page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrder1Enum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    updated_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$gte]', 'style': 'form', 'explode': True }})
    updated_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$lte]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfigurationsRequest:
    query_params: GetConfigurationsQueryParams = field()
    

@dataclass
class GetConfigurationsResponse:
    content_type: str = field()
    status_code: int = field()
    
