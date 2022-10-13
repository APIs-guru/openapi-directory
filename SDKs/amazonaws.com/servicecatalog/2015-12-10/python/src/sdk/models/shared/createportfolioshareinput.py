from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organizationnode


@dataclass_json
@dataclass
class CreatePortfolioShareInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    organization_node: Optional[organizationnode.OrganizationNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationNode' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    share_tag_options: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareTagOptions' }})
    
