from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignPagedCollection:
    r"""CampaignPagedCollection
    This type defines the fields that paginate the campaigns returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
    """
    
    campaigns: Optional[List[Campaign]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
