from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBundlesResult:
    r"""ListBundlesResult
     Result structure contains a list of all available bundles with details. 
    """
    
    bundle_list: Optional[List[BundleDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
