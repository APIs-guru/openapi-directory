from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddBankTransferBatchPaymentPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum(str, Enum):
    ACCOUNT_DETAILS = "ACCOUNT_DETAILS"


@dataclass_json
@dataclass
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    dest_account_holder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destAccountHolderName') }})
    dest_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destAccountNumber') }})
    dest_iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destIban') }})
    dest_nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destNsc') }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    your_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yourRef') }})
    
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum(str, Enum):
    PAYEE_ID = "PAYEE_ID"


@dataclass_json
@dataclass
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    payee_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    your_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yourRef') }})
    

@dataclass
class AddBankTransferBatchPaymentRequest:
    path_params: AddBankTransferBatchPaymentPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddBankTransferBatchPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    onebatches_1_percent_7_bbatch_uuid_percent_7_d_1internaltransfers_post_responses_200_content_application_1json_schema: Optional[shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema] = field(default=None)
    
