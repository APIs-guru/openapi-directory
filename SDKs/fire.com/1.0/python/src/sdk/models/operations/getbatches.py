from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetBatchesBatchStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class GetBatchesBatchTypesEnum(str, Enum):
    INTERNAL_TRANSFER = "INTERNAL_TRANSFER"
    BANK_TRANSFER = "BANK_TRANSFER"
    NEW_PAYEE = "NEW_PAYEE"

class GetBatchesOrderEnum(str, Enum):
    DESC = "DESC"
    ASC = "ASC"

class GetBatchesOrderByEnum(str, Enum):
    DATE = "DATE"


@dataclass
class GetBatchesQueryParams:
    batch_status: Optional[GetBatchesBatchStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'batchStatus', 'style': 'form', 'explode': True }})
    batch_types: Optional[GetBatchesBatchTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'batchTypes', 'style': 'form', 'explode': True }})
    order: Optional[GetBatchesOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_by: Optional[GetBatchesOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBatchesRequest:
    query_params: GetBatchesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetBatches200ApplicationJSONItemsResult:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class GetBatches200ApplicationJSONItemsStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GetBatches200ApplicationJSONItemsBatchItem:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    amount_after_charges: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountAfterCharges' }})
    batch_item_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchItemUuid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeAmount' }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanFrom' }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanTo' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    ref_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refId' }})
    result: Optional[GetBatches200ApplicationJSONItemsResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    status: Optional[GetBatches200ApplicationJSONItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    

@dataclass_json
@dataclass
class GetBatches200ApplicationJSONBatchItems:
    items: Optional[List[GetBatches200ApplicationJSONItemsBatchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetBatchesResponse:
    batch_items: Optional[GetBatches200ApplicationJSONBatchItems] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
