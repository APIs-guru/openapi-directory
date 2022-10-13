from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import code_scanning_alert_classification_enum
from . import code_scanning_alert_location
from . import code_scanning_alert_state_enum


@dataclass_json
@dataclass
class CodeScanningAlertInstanceMessage:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class CodeScanningAlertInstance:
    analysis_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysis_key' }})
    classifications: Optional[List[code_scanning_alert_classification_enum.CodeScanningAlertClassificationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifications' }})
    commit_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_sha' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    location: Optional[code_scanning_alert_location.CodeScanningAlertLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    message: Optional[CodeScanningAlertInstanceMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    state: Optional[code_scanning_alert_state_enum.CodeScanningAlertStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
