from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListDomainsResult:
    domain_names: Optional[List[str]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
