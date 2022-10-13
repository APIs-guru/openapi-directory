from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recordingconfigurationsummary


@dataclass_json
@dataclass
class ListRecordingConfigurationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recording_configurations: List[recordingconfigurationsummary.RecordingConfigurationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingConfigurations' }})
    
