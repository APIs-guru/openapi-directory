from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharestatus_enum


@dataclass_json
@dataclass
class UpdatePortfolioShareOutput:
    portfolio_share_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareToken' }})
    status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
