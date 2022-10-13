from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainalias


@dataclass_json
@dataclass
class Domains:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    domain_aliases: Optional[List[domainalias.DomainAlias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainAliases' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrimary' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
