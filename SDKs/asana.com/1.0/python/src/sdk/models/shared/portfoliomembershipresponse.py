from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import portfoliocompact
from . import usercompact


@dataclass_json
@dataclass
class PortfolioMembershipResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    portfolio: Optional[portfoliocompact.PortfolioCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolio' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
