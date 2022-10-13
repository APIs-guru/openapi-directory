from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListPortfolioAccessInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    organization_parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationParentId' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    
