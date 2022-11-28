from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    A = "A"
    B = "B"

class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum(str, Enum):
    RECIEVED = "RECIEVED"
    REJECT_REQUESTED = "REJECT_REQUESTED"
    REJECT_READY_FOR_PROCESSING = "REJECT_READY_FOR_PROCESSING"
    REJECT_RECORD_IN_PROGRESS = "REJECT_RECORD_IN_PROGRESS"
    REJECT_RECORDED = "REJECT_RECORDED"
    REJECT_FILE_CREATED = "REJECT_FILE_CREATED"
    REJECT_FILE_SENT = "REJECT_FILE_SENT"
    COLLECTED = "COLLECTED"
    REFUND_REQUESTED = "REFUND_REQUESTED"
    REFUND_RECORD_IN_PROGRESS = "REFUND_RECORD_IN_PROGRESS"
    REFUND_RECORDED = "REFUND_RECORDED"
    REFUND_FILE_CREATED = "REFUND_FILE_CREATED"
    REFUND_FILE_SENT = "REFUND_FILE_SENT"

class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum(str, Enum):
    FIRST_COLLECTION = "FIRST_COLLECTION"
    ONGOING_COLLECTION = "ONGOING_COLLECTION"
    REPRESENTED_COLLECTION = "REPRESENTED_COLLECTION"
    FINAL_COLLECTION = "FINAL_COLLECTION"


@dataclass_json
@dataclass
class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direct_debit_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitReference') }})
    direct_debit_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitUuid') }})
    is_ddic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDDIC') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandate_u_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateUUid') }})
    originator_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorAlias') }})
    originator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorName') }})
    originator_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorReference') }})
    scheme_reject_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeRejectReason') }})
    scheme_reject_reason_code: Optional[OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeRejectReasonCode') }})
    status: Optional[OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIcan') }})
    target_payee_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPayeeId') }})
    type: Optional[OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
