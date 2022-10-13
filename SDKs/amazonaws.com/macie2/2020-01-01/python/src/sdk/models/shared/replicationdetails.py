from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationDetails:
    replicated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicated' }})
    replicated_externally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicatedExternally' }})
    replication_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationAccounts' }})
    
