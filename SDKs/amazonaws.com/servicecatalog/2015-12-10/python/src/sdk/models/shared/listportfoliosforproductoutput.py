from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portfoliodetail


@dataclass_json
@dataclass
class ListPortfoliosForProductOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    portfolio_details: Optional[List[portfoliodetail.PortfolioDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioDetails' }})
    
