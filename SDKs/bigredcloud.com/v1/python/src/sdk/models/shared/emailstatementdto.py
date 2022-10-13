from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailStatementDto:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bccAddresses' }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    from_period: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromPeriod', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageBody' }})
    minimum_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumBalance' }})
    to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toAddress' }})
    to_period: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toPeriod', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
