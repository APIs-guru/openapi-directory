from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import organizationnodetype_enum


@dataclass_json
@dataclass
class ListOrganizationPortfolioAccessInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    organization_node_type: organizationnodetype_enum.OrganizationNodeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationNodeType' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    
