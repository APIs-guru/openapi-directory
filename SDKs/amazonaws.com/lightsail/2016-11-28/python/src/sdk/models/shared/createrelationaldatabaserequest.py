from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRelationalDatabaseRequest:
    master_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterDatabaseName') }})
    master_username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUsername') }})
    relational_database_blueprint_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseBlueprintId') }})
    relational_database_bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseBundleId') }})
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUserPassword') }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMaintenanceWindow') }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyAccessible') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
