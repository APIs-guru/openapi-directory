from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetReturnsQueryParams:
    from_date: str = field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: str = field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturnsSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2Order:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2Reason:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2RmaItemV2:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    non_restocked_reason: Optional[GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonRestockedReason') }})
    quantity_expected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    quantity_restocked: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityRestocked') }})
    quantity_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReturned') }})
    quantity_shipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityShipped') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2Status:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2UserV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2ReturnV2:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reason: GetReturnsReturnsArrayV2ReturnV2Reason = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: GetReturnsReturnsArrayV2ReturnV2Status = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: GetReturnsReturnsArrayV2ReturnV2UserV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    order: Optional[GetReturnsReturnsArrayV2ReturnV2Order] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    returned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnedBy') }})
    rma_items: Optional[List[GetReturnsReturnsArrayV2ReturnV2RmaItemV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaItems') }})
    rma_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2MetaPaginationV2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2Meta:
    pagination: Optional[GetReturnsReturnsArrayV2MetaPaginationV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetReturnsReturnsArrayV2:
    data: Optional[List[GetReturnsReturnsArrayV2ReturnV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[GetReturnsReturnsArrayV2Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetReturnsRequest:
    query_params: GetReturnsQueryParams = field()
    security: GetReturnsSecurity = field()
    

@dataclass
class GetReturnsResponse:
    content_type: str = field()
    status_code: int = field()
    returns_array_v2: Optional[GetReturnsReturnsArrayV2] = field(default=None)
    
