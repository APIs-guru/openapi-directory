from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateBatchPaymentNewBatchTypeEnum(str, Enum):
    BANK_TRANSFER = "BANK_TRANSFER"
    INTERNAL_TRANSFER = "INTERNAL_TRANSFER"


@dataclass_json
@dataclass
class CreateBatchPaymentNewBatch:
    batch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchName') }})
    call_back_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callBackUrl') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    job_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobNumber') }})
    type: Optional[CreateBatchPaymentNewBatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateBatchPaymentNewBatchResponse:
    batch_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchUuid') }})
    

@dataclass
class CreateBatchPaymentRequest:
    request: CreateBatchPaymentNewBatch = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBatchPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    new_batch_response: Optional[CreateBatchPaymentNewBatchResponse] = field(default=None)
    
