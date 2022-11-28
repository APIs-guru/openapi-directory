from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataLakeSettings:
    r"""DataLakeSettings
    A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
    """
    
    create_database_default_permissions: Optional[List[PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDatabaseDefaultPermissions') }})
    create_table_default_permissions: Optional[List[PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTableDefaultPermissions') }})
    data_lake_admins: Optional[List[DataLakePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakeAdmins') }})
    trusted_resource_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustedResourceOwners') }})
    
