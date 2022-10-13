from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connection


@dataclass_json
@dataclass
class ConnectionDetails:
    connection: Optional[connection.Connection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    recent_mig_vms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentMigVms' }})
    
