from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import owneropeningbalancevatentrydto


@dataclass_json
@dataclass
class OwnerOpeningBalanceDto:
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isChanged' }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalVAT' }})
    unpaid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unpaid' }})
    vat_entries: Optional[List[owneropeningbalancevatentrydto.OwnerOpeningBalanceVatEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatEntries' }})
    
