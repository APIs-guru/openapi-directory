from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portfoliosharedetail


@dataclass_json
@dataclass
class DescribePortfolioSharesOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    portfolio_share_details: Optional[List[portfoliosharedetail.PortfolioShareDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareDetails' }})
    
