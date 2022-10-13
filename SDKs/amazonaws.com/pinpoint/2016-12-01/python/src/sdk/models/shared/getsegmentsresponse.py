from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import segmentsresponse


@dataclass_json
@dataclass
class GetSegmentsResponse:
    segments_response: segmentsresponse.SegmentsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentsResponse' }})
    
