from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secretversionslistentry


@dataclass_json
@dataclass
class ListSecretVersionIdsResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    versions: Optional[List[secretversionslistentry.SecretVersionsListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Versions' }})
    
