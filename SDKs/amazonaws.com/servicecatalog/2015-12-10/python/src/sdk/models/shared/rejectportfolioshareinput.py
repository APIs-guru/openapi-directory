from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RejectPortfolioShareInput:
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    portfolio_share_type: Optional[PortfolioShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareType') }})
    
