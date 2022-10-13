from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domain


@dataclass_json
@dataclass
class GetDomainsResult:
    domains: Optional[List[domain.Domain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
