from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntityReceiptDisbursementTotals:
    cumulative_candidate_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_candidate_disbursements' }})
    cumulative_candidate_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_candidate_receipts' }})
    cumulative_pac_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_pac_disbursements' }})
    cumulative_pac_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_pac_receipts' }})
    cumulative_party_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_party_disbursements' }})
    cumulative_party_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative_party_receipts' }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
