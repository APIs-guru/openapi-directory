from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudsqlcredential


@dataclass_json
@dataclass
class ConnectionCredential:
    cloud_sql: Optional[cloudsqlcredential.CloudSQLCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSql' }})
    
