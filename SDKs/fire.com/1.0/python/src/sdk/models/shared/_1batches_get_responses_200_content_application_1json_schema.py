from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem:
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
    result: Optional[OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    status: Optional[OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    

@dataclass_json
@dataclass
class OnebatchesGetResponses200ContentApplication1jsonSchema:
    items: Optional[List[OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
