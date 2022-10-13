from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shippinglabelstatus_enum


@dataclass_json
@dataclass
class DescribeReturnShippingLabelResult:
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shippinglabelstatus_enum.ShippingLabelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
