from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import segmentresponse


@dataclass_json
@dataclass
class UpdateSegmentResponse:
    segment_response: segmentresponse.SegmentResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentResponse' }})
    
