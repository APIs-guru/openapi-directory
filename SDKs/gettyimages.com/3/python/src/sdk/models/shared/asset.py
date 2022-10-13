from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import displaysize


@dataclass_json
@dataclass
class Asset:
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_type' }})
    date_added: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_added', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[List[displaysize.DisplaySize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_sizes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
