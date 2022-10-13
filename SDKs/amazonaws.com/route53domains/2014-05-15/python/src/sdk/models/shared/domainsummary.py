from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainSummary:
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRenew' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transfer_lock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransferLock' }})
    
