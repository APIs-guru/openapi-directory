from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationnode


@dataclass_json
@dataclass
class ListOrganizationPortfolioAccessOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    organization_nodes: Optional[List[organizationnode.OrganizationNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationNodes' }})
    
