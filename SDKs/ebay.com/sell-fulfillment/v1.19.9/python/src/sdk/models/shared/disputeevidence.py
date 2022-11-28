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
class DisputeEvidence:
    r"""DisputeEvidence
    This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
    """
    
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[List[FileInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    provided_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedDate') }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDate') }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    shipment_tracking: Optional[List[TrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTracking') }})
    
