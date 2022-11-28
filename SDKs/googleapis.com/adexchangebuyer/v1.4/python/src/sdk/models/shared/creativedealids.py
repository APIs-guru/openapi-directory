from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreativeDealIdsDealStatuses:
    arc_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arcStatus') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    web_property_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class CreativeDealIds:
    r"""CreativeDealIds
    The external deal ids associated with a creative.
    """
    
    deal_statuses: Optional[List[CreativeDealIdsDealStatuses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealStatuses') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
