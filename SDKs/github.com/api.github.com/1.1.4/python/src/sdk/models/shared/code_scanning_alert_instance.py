from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeScanningAlertInstanceMessage:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class CodeScanningAlertInstance:
    analysis_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis_key') }})
    classifications: Optional[List[CodeScanningAlertClassificationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    commit_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    location: Optional[CodeScanningAlertLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[CodeScanningAlertInstanceMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    state: Optional[CodeScanningAlertStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
