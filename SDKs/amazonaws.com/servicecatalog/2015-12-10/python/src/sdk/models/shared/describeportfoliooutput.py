from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePortfolioOutput:
    budgets: Optional[List[BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    portfolio_detail: Optional[PortfolioDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioDetail') }})
    tag_options: Optional[List[TagOptionDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
