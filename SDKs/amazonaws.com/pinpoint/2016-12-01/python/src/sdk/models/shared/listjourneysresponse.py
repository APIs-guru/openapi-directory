from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import journeysresponse


@dataclass_json
@dataclass
class ListJourneysResponse:
    journeys_response: journeysresponse.JourneysResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneysResponse' }})
    
