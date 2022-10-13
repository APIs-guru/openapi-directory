from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import describeportfoliosharetype_enum


@dataclass_json
@dataclass
class DescribePortfolioSharesInput:
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    type: describeportfoliosharetype_enum.DescribePortfolioShareTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
