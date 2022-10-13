from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainalias


@dataclass_json
@dataclass
class DomainAliases:
    domain_aliases: Optional[List[domainalias.DomainAlias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainAliases' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
