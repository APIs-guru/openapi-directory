from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharedetails
from . import sharestatus_enum


@dataclass_json
@dataclass
class DescribePortfolioShareStatusOutput:
    organization_node_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationNodeValue' }})
    portfolio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    portfolio_share_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioShareToken' }})
    share_details: Optional[sharedetails.ShareDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareDetails' }})
    status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
