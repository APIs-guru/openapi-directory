from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import portfoliosharetype_enum


@dataclass_json
@dataclass
class RejectPortfolioShareInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    portfolio_share_type: Optional[portfoliosharetype_enum.PortfolioShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareType' }})
    
