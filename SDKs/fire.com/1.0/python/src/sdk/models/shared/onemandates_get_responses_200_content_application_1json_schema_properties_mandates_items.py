from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum(str, Enum):
    ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS"
    DDIC = "DDIC"
    ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND"
    ACCOUNT_NOT_LIVE = "ACCOUNT_NOT_LIVE"
    CUSTOMER_NOT_FOUND = "CUSTOMER_NOT_FOUND"
    BUSINESS_NOT_LIVE = "BUSINESS_NOT_LIVE"
    BUSINESS_NOT_FULL = "BUSINESS_NOT_FULL"
    PERSONAL_USER_NOT_LIVE = "PERSONAL_USER_NOT_LIVE"
    PERSONAL_USER_NOT_FULL = "PERSONAL_USER_NOT_FULL"
    MANDATE_ALREADY_EXISTS = "MANDATE_ALREADY_EXISTS"
    MANDATE_WITH_DIFERENT_ACCOUNT = "MANDATE_WITH_DIFERENT_ACCOUNT"
    NULL_MANDATE_REFERENCE = "NULL_MANDATE_REFERENCE"
    INVALID_ACCOUNT_CURRENCY = "INVALID_ACCOUNT_CURRENCY"
    INVALID_MANDATE_REFERENCE = "INVALID_MANDATE_REFERENCE"
    REQUESTED_BY_CUSTOMER_VIA_SUPPORT = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT"
    CUSTOMER_ACCOUNT_CLOSED = "CUSTOMER_ACCOUNT_CLOSED"
    CUSTOMER_DECEASED = "CUSTOMER_DECEASED"
    ACCOUNT_TRANSFERRED = "ACCOUNT_TRANSFERRED"
    MANDATE_NOT_FOUND = "MANDATE_NOT_FOUND"
    ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT"
    INVALID_ACCOUNT_TYPE = "INVALID_ACCOUNT_TYPE"
    MANDATE_EXPIRED = "MANDATE_EXPIRED"
    MANDATE_CANCELLED = "MANDATE_CANCELLED"
    REQUESTED_BY_CUSTOMER = "REQUESTED_BY_CUSTOMER"

class OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum(str, Enum):
    CREATED = "CREATED"
    LIVE = "LIVE"
    REJECT_REQUESTED = "REJECT_REQUESTED"
    REJECT_RECORD_IN_PROGRESS = "REJECT_RECORD_IN_PROGRESS"
    REJECT_RECORDED = "REJECT_RECORDED"
    REJECT_FILE_CREATED = "REJECT_FILE_CREATED"
    REJECT_FILE_SENT = "REJECT_FILE_SENT"
    CANCEL_REQUESTED = "CANCEL_REQUESTED"
    CANCEL_RECORD_IN_PROGRESS = "CANCEL_RECORD_IN_PROGRESS"
    CANCEL_RECORDED = "CANCEL_RECORDED"
    CANCEL_FILE_CREATED = "CANCEL_FILE_CREATED"
    CANCEL_FILE_SENT = "CANCEL_FILE_SENT"
    COMPLETE = "COMPLETE"
    DORMANT = "DORMANT"


@dataclass_json
@dataclass
class OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    currency: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_cancelled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCancelled'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_completed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCompleted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fire_rejection_reason: Optional[OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fireRejectionReason') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_direct_debit_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestDirectDebitAmount') }})
    latest_direct_debit_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestDirectDebitDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandate_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateReference') }})
    mandate_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateUuid') }})
    number_of_direct_debit_collected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDirectDebitCollected') }})
    originator_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorAlias') }})
    originator_logo_url_large: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorLogoUrlLarge') }})
    originator_logo_url_small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorLogoUrlSmall') }})
    originator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorName') }})
    originator_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorReference') }})
    scheme_cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeCancelReason') }})
    scheme_cancel_reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeCancelReasonCode') }})
    status: Optional[OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIcan') }})
    value_of_direct_debit_collected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueOfDirectDebitCollected') }})
    
