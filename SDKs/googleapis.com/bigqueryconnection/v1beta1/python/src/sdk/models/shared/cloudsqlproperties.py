from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudsqlcredential

class CloudSQLPropertiesTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    POSTGRES = "POSTGRES"
    MYSQL = "MYSQL"


@dataclass_json
@dataclass
class CloudSQLProperties:
    credential: Optional[cloudsqlcredential.CloudSQLCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountId' }})
    type: Optional[CloudSQLPropertiesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
