from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationupdate


@dataclass_json
@dataclass
class UpdateApplicationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_update: applicationupdate.ApplicationUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationUpdate' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    
