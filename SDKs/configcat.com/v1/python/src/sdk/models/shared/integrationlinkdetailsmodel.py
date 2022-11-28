from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntegrationLinkDetailsModel:
    all_integration_link_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allIntegrationLinkCount') }})
    details: Optional[List[IntegrationLinkDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
