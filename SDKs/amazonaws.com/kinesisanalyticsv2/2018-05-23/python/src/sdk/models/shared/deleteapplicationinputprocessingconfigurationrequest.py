from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteApplicationInputProcessingConfigurationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    input_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    
