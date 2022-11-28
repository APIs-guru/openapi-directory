from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Campaigns:
    r"""Campaigns
    This type contains a list of campaigns.
    """
    
    campaigns: Optional[List[Campaign]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    
