from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Receipt:
    r"""Receipt
    Records events during an engagement.
    """
    
    receipt_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    receipt_type: ReceiptTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptType') }})
    contact_channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelArn') }})
    receipt_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceiptInfo') }})
    
