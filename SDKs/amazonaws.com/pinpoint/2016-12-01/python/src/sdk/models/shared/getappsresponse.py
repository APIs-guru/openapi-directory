from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationsresponse


@dataclass_json
@dataclass
class GetAppsResponse:
    applications_response: applicationsresponse.ApplicationsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationsResponse' }})
    
