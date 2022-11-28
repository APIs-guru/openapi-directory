from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BundlesListResponse:
    r"""BundlesListResponse
    Response listing all app bundles.
    """
    
    bundles: Optional[List[Bundle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
