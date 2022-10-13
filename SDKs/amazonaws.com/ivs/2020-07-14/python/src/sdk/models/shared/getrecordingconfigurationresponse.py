from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recordingconfiguration


@dataclass_json
@dataclass
class GetRecordingConfigurationResponse:
    recording_configuration: Optional[recordingconfiguration.RecordingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingConfiguration' }})
    
