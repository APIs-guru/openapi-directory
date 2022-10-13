from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import principalpermissions
from . import principalpermissions
from . import datalakeprincipal


@dataclass_json
@dataclass
class DataLakeSettings:
    create_database_default_permissions: Optional[List[principalpermissions.PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDatabaseDefaultPermissions' }})
    create_table_default_permissions: Optional[List[principalpermissions.PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTableDefaultPermissions' }})
    data_lake_admins: Optional[List[datalakeprincipal.DataLakePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLakeAdmins' }})
    trusted_resource_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustedResourceOwners' }})
    
