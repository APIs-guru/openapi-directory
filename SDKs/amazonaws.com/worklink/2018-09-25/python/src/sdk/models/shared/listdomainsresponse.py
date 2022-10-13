from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainsummary


@dataclass_json
@dataclass
class ListDomainsResponse:
    domains: Optional[List[domainsummary.DomainSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
