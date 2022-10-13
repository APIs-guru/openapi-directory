from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationresponse


@dataclass_json
@dataclass
class DeleteAppResponse:
    application_response: applicationresponse.ApplicationResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationResponse' }})
    
