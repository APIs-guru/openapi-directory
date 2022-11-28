from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MoveAssignmentRequest:
    r"""MoveAssignmentRequest
    The request for ReservationService.MoveAssignment. **Note**: \"bigquery.reservationAssignments.create\" permission is required on the destination_id. **Note**: \"bigquery.reservationAssignments.create\" and \"bigquery.reservationAssignments.delete\" permission are required on the related assignee.
    """
    
    destination_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    
