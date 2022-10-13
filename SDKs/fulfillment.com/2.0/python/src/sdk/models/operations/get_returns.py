from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetReturnsQueryParams:
    from_date: str = field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    to_date: str = field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturnsSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnsRequest:
    query_params: GetReturnsQueryParams = field(default=None)
    security: GetReturnsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataReason:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataRmaItemsItem:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataRmaItemsRmaItemV2:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[GetReturns200ApplicationJSONDataRmaItemsItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    non_restocked_reason: Optional[GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonRestockedReason' }})
    quantity_expected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityExpected' }})
    quantity_restocked: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityRestocked' }})
    quantity_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityReturned' }})
    quantity_shipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityShipped' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataStatus:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataUpdatedByUserV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONDataReturnV2:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    order: Optional[GetReturns200ApplicationJSONDataOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    reason: GetReturns200ApplicationJSONDataReason = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    returned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnedBy' }})
    rma_items: Optional[List[GetReturns200ApplicationJSONDataRmaItemsRmaItemV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rmaItems' }})
    rma_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rmaNumber' }})
    status: GetReturns200ApplicationJSONDataStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: GetReturns200ApplicationJSONDataUpdatedByUserV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONMetaPaginationPaginationV2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONMeta:
    pagination: Optional[GetReturns200ApplicationJSONMetaPaginationPaginationV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetReturns200ApplicationJSONReturnsArrayV2:
    data: Optional[List[GetReturns200ApplicationJSONDataReturnV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[GetReturns200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetReturnsResponse:
    content_type: str = field(default=None)
    returns_array_v2: Optional[GetReturns200ApplicationJSONReturnsArrayV2] = field(default=None)
    status_code: int = field(default=None)
    
