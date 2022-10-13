from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workforce


@dataclass_json
@dataclass
class UpdateWorkforceResponse:
    workforce: workforce.Workforce = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workforce' }})
    
