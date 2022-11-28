from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePortfolioShareStatusOutput:
    organization_node_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNodeValue') }})
    portfolio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    portfolio_share_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareToken') }})
    share_details: Optional[ShareDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareDetails') }})
    status: Optional[ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
