from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole:
    additional_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalLinks' }})
    console_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consoleUris' }})
    steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
