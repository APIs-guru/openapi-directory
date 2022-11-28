from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateRelationalDatabaseRequest:
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyImmediately') }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateIdentifier') }})
    disable_backup_retention: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableBackupRetention') }})
    enable_backup_retention: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBackupRetention') }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUserPassword') }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMaintenanceWindow') }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyAccessible') }})
    rotate_master_user_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotateMasterUserPassword') }})
    
