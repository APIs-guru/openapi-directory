from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePresignedNotebookInstanceURLInput:
    notebook_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionExpirationDurationInSeconds' }})
    
