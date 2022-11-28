from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreatePresignedNotebookInstanceURLInput:
    notebook_instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceName') }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionExpirationDurationInSeconds') }})
    
