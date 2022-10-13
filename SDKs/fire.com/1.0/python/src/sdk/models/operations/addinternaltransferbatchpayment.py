from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class AddInternalTransferBatchPaymentPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanFrom' }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanTo' }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    

@dataclass
class AddInternalTransferBatchPaymentRequest:
    path_params: AddInternalTransferBatchPaymentPathParams = field(default=None)
    request: AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse:
    batch_item_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchItemUuid' }})
    

@dataclass
class AddInternalTransferBatchPaymentResponse:
    content_type: str = field(default=None)
    new_batch_item_response: Optional[AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse] = field(default=None)
    status_code: int = field(default=None)
    
