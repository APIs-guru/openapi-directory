from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secretlistentry


@dataclass_json
@dataclass
class ListSecretsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    secret_list: Optional[List[secretlistentry.SecretListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretList' }})
    
