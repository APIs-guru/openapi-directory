from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inputprocessingconfiguration


@dataclass_json
@dataclass
class AddApplicationInputProcessingConfigurationRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    input_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    input_processing_configuration: inputprocessingconfiguration.InputProcessingConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfiguration' }})
    
