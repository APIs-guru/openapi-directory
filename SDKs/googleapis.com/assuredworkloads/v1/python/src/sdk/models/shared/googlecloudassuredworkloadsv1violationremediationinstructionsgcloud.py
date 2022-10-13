from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud:
    additional_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalLinks' }})
    gcloud_commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcloudCommands' }})
    steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
