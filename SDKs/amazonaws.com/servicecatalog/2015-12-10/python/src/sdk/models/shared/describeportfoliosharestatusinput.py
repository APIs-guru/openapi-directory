from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePortfolioShareStatusInput:
    portfolio_share_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareToken' }})
    
