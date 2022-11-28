from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AddInternalTransferBatchPaymentPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddInternalTransferBatchPaymentBatchItemInternalTransfer:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    

@dataclass_json
@dataclass
class AddInternalTransferBatchPaymentNewBatchItemResponse:
    batch_item_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemUuid') }})
    

@dataclass
class AddInternalTransferBatchPaymentRequest:
    path_params: AddInternalTransferBatchPaymentPathParams = field()
    request: AddInternalTransferBatchPaymentBatchItemInternalTransfer = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddInternalTransferBatchPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    new_batch_item_response: Optional[AddInternalTransferBatchPaymentNewBatchItemResponse] = field(default=None)
    
