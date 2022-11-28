from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CloudSQLPropertiesTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    POSTGRES = "POSTGRES"
    MYSQL = "MYSQL"


@dataclass_json
@dataclass
class CloudSQLPropertiesInput:
    r"""CloudSQLPropertiesInput
    Connection properties specific to the Cloud SQL.
    """
    
    credential: Optional[CloudSQLCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    type: Optional[CloudSQLPropertiesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CloudSQLProperties:
    r"""CloudSQLProperties
    Connection properties specific to the Cloud SQL.
    """
    
    credential: Optional[CloudSQLCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountId') }})
    type: Optional[CloudSQLPropertiesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
