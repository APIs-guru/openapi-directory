from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOrganizationPortfolioAccessInput:
    organization_node_type: OrganizationNodeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNodeType') }})
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    
