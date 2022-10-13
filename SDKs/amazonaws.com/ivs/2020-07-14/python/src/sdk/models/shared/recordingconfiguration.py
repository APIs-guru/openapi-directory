from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import destinationconfiguration
from . import recordingconfigurationstate_enum


@dataclass_json
@dataclass
class RecordingConfiguration:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    destination_configuration: destinationconfiguration.DestinationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: recordingconfigurationstate_enum.RecordingConfigurationStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
