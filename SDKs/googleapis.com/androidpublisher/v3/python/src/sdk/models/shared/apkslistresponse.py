from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApksListResponse:
    r"""ApksListResponse
    Response listing all APKs.
    """
    
    apks: Optional[List[Apk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apks') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
