from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePortfolioSharesInput:
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    type: DescribePortfolioShareTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    
