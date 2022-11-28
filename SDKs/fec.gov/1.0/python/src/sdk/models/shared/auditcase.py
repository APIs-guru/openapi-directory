from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditCase:
    audit_case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit_case_id') }})
    audit_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit_id') }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_name') }})
    committee_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_description') }})
    committee_designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_designation') }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_name') }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_type') }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    far_release_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_release_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    link_to_report: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_to_report') }})
    primary_category_list: Optional[List[AuditCaseCategoryRelation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_category_list') }})
    
