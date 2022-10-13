from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateRelationalDatabaseRequest:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    master_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterDatabaseName' }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterUserPassword' }})
    master_username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterUsername' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyAccessible' }})
    relational_database_blueprint_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseBlueprintId' }})
    relational_database_bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseBundleId' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
