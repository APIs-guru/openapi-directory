from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import productviewsummary
from . import status_enum


@dataclass_json
@dataclass
class ProductViewDetail:
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    product_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductARN' }})
    product_view_summary: Optional[productviewsummary.ProductViewSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewSummary' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
