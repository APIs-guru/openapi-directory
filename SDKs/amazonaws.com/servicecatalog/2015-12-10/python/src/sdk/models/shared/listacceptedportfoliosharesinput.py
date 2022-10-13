from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import portfoliosharetype_enum


@dataclass_json
@dataclass
class ListAcceptedPortfolioSharesInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    portfolio_share_type: Optional[portfoliosharetype_enum.PortfolioShareTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareType' }})
    
