from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePortfolioSharesOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    portfolio_share_details: Optional[List[PortfolioShareDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareDetails') }})
    
