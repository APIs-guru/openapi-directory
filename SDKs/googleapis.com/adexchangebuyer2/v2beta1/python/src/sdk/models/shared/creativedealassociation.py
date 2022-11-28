from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreativeDealAssociation:
    r"""CreativeDealAssociation
    The association between a creative and a deal.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    deals_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealsId') }})
    
