from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domaininfo


@dataclass_json
@dataclass
class DomainInfos:
    domain_infos: List[domaininfo.DomainInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainInfos' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
