from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ViolatingSitesResponse:
    r"""ViolatingSitesResponse
    Response message for ListViolatingSites.
    """
    
    violating_sites: Optional[List[SiteSummaryResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatingSites') }})
    
