from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import receipttype_enum


@dataclass_json
@dataclass
class Receipt:
    contact_channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactChannelArn' }})
    receipt_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptInfo' }})
    receipt_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    receipt_type: receipttype_enum.ReceiptTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiptType' }})
    
