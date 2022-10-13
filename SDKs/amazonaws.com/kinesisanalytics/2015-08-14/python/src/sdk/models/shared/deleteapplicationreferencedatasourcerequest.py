from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteApplicationReferenceDataSourceRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    reference_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    
