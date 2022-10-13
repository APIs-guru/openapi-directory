from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Election:
    candidate_election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_election_year' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_pcc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_pcc_id' }})
    candidate_pcc_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_pcc_name' }})
    cash_on_hand_end_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_on_hand_end_period' }})
    committee_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_ids' }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    incumbent_challenge_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incumbent_challenge_full' }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party_full' }})
    total_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_disbursements' }})
    total_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_receipts' }})
    
