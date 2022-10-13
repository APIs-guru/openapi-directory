from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import committeehistory
from . import efilings


@dataclass_json
@dataclass
class ScheduleAEfile:
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_indicator' }})
    back_reference_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_schedule_name' }})
    back_reference_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_transaction_id' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    committee: Optional[committeehistory.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    conduit_committee_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_city' }})
    conduit_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_id' }})
    conduit_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_name' }})
    conduit_committee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_state' }})
    conduit_committee_street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_street1' }})
    conduit_committee_street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_street2' }})
    conduit_committee_zip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_zip' }})
    contribution_receipt_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contribution_receipt_amount' }})
    contribution_receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contribution_receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    contributor_aggregate_ytd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_aggregate_ytd' }})
    contributor_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_city' }})
    contributor_employer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_employer' }})
    contributor_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_first_name' }})
    contributor_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_last_name' }})
    contributor_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_middle_name' }})
    contributor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_name' }})
    contributor_occupation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_occupation' }})
    contributor_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_prefix' }})
    contributor_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_state' }})
    contributor_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_suffix' }})
    contributor_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_zip' }})
    csv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv_url' }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    fec_election_type_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_election_type_desc' }})
    fec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_url' }})
    file_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    filing: Optional[efilings.EFilings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filing' }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_number' }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_number' }})
    load_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_code' }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_text' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    pgo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pgo' }})
    related_line_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_line_number' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    
