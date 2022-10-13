from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budgetdetail
from . import portfoliodetail
from . import tagoptiondetail
from . import tag


@dataclass_json
@dataclass
class DescribePortfolioOutput:
    budgets: Optional[List[budgetdetail.BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budgets' }})
    portfolio_detail: Optional[portfoliodetail.PortfolioDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioDetail' }})
    tag_options: Optional[List[tagoptiondetail.TagOptionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagOptions' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
