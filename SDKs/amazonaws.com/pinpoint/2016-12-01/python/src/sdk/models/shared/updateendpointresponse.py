from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import messagebody


@dataclass_json
@dataclass
class UpdateEndpointResponse:
    message_body: messagebody.MessageBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageBody' }})
    
