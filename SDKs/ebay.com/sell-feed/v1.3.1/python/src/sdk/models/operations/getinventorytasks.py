from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetInventoryTasksQueryParams:
    date_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    feed_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    look_back_days: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'look_back_days', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    schedule_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'schedule_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInventoryTasksSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInventoryTasksRequest:
    query_params: GetInventoryTasksQueryParams = field()
    security: GetInventoryTasksSecurity = field()
    

@dataclass
class GetInventoryTasksResponse:
    content_type: str = field()
    status_code: int = field()
    inventory_task_collection: Optional[shared.InventoryTaskCollection] = field(default=None)
    
