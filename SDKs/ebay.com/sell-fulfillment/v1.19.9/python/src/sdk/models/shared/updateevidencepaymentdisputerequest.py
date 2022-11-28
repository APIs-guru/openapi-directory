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
class UpdateEvidencePaymentDisputeRequest:
    r"""UpdateEvidencePaymentDisputeRequest
    This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
    """
    
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[List[FileEvidence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    
