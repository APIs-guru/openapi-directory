from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import journeyresponse


@dataclass_json
@dataclass
class CreateJourneyResponse:
    journey_response: journeyresponse.JourneyResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyResponse' }})
    
