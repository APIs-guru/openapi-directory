from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult:
    r"""OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult
    The outcome of the attempted transaction.
    """
    
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    REMOVED = "REMOVED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_after_charges: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountAfterCharges') }})
    batch_item_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemUuid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeAmount') }})
    ican_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    ref_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refId') }})
    result: Optional[OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    status: Optional[OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    
