from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateBatchPaymentRequestBodyTypeEnum(str, Enum):
    BANK_TRANSFER = "BANK_TRANSFER"
    INTERNAL_TRANSFER = "INTERNAL_TRANSFER"


@dataclass_json
@dataclass
class CreateBatchPaymentRequestBodyNewBatch:
    batch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchName' }})
    call_back_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callBackUrl' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    job_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobNumber' }})
    type: Optional[CreateBatchPaymentRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateBatchPaymentRequest:
    request: CreateBatchPaymentRequestBodyNewBatch = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateBatchPayment200ApplicationJSONNewBatchResponse:
    batch_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchUuid' }})
    

@dataclass
class CreateBatchPaymentResponse:
    content_type: str = field(default=None)
    new_batch_response: Optional[CreateBatchPayment200ApplicationJSONNewBatchResponse] = field(default=None)
    status_code: int = field(default=None)
    
