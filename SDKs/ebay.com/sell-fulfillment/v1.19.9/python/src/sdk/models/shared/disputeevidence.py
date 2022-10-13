from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileinfo
from . import orderlineitems
from . import trackinginfo


@dataclass_json
@dataclass
class DisputeEvidence:
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceId' }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceType' }})
    files: Optional[List[fileinfo.FileInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    line_items: Optional[List[orderlineitems.OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    provided_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providedDate' }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestDate' }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondByDate' }})
    shipment_tracking: Optional[List[trackinginfo.TrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentTracking' }})
    
