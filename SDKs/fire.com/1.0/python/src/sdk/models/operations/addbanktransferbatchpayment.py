from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddBankTransferBatchPaymentPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    
class AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum(str, Enum):
    ACCOUNT_DETAILS = "ACCOUNT_DETAILS"


@dataclass_json
@dataclass
class AddBankTransferBatchPaymentRequestBody1BatchItemBankTransferMode2:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    dest_account_holder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destAccountHolderName' }})
    dest_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destAccountNumber' }})
    dest_iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destIban' }})
    dest_nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destNsc' }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanFrom' }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'myRef' }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    your_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yourRef' }})
    
class AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum(str, Enum):
    PAYEE_ID = "PAYEE_ID"


@dataclass_json
@dataclass
class AddBankTransferBatchPaymentRequestBody2BatchItemBankTransferMode1:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanFrom' }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'myRef' }})
    payee_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeType' }})
    your_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yourRef' }})
    

@dataclass
class AddBankTransferBatchPaymentRequest:
    path_params: AddBankTransferBatchPaymentPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddBankTransferBatchPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    onebatches_1_percent_7_bbatch_uuid_percent_7_d_1internaltransfers_post_responses_200_content_application_1json_schema: Optional[shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema] = field(default=None)
    
