from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portfoliodetail
from . import tag


@dataclass_json
@dataclass
class CreatePortfolioOutput:
    portfolio_detail: Optional[portfoliodetail.PortfolioDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioDetail' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
