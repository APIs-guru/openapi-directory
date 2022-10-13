from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import body
from . import content


@dataclass_json
@dataclass
class Message:
    body: body.Body = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    subject: content.Content = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
