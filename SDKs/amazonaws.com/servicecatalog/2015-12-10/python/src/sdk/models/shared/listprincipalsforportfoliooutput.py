from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import principal


@dataclass_json
@dataclass
class ListPrincipalsForPortfolioOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    principals: Optional[List[principal.Principal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principals' }})
    
