from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationsummary


@dataclass_json
@dataclass
class ListOrganizationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_summaries: Optional[List[organizationsummary.OrganizationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationSummaries' }})
    
