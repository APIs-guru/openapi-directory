from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCodeSigningConfigsResponse:
    code_signing_configs: Optional[List[CodeSigningConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigs') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
