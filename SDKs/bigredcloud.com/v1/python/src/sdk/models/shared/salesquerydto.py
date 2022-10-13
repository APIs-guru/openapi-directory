from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acentrydto
from . import acudfvaluedto
from . import vatentrydto


@dataclass_json
@dataclass
class SalesQueryDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acCode' }})
    ac_entries: Optional[List[acentrydto.AcEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acEntries' }})
    book_tran_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTranTypeId' }})
    custom_fields: Optional[List[acudfvaluedto.AcudfValueDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lo_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loType' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_net: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalNet' }})
    total_vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalVAT' }})
    unpaid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unpaid' }})
    vat_entries: Optional[List[vatentrydto.VatEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatEntries' }})
    vat_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatTypeId' }})
    
