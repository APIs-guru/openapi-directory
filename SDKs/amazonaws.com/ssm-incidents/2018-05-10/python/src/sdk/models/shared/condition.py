from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevaluelist


@dataclass_json
@dataclass
class Condition:
    after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'after', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'before', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    equals: Optional[attributevaluelist.AttributeValueList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equals' }})
    
