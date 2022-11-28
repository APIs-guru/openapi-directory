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
class EvidenceRequest:
    r"""EvidenceRequest
    This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
    """
    
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDate') }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    
