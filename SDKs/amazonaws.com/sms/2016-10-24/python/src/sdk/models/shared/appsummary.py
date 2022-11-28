from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppSummary:
    r"""AppSummary
    Information about the application.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    imported_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedAppId') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_replication_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReplicationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_configuration_status: Optional[AppLaunchConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchConfigurationStatus') }})
    launch_details: Optional[LaunchDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchDetails') }})
    launch_status: Optional[AppLaunchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStatus') }})
    launch_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStatusMessage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replication_configuration_status: Optional[AppReplicationConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfigurationStatus') }})
    replication_status: Optional[AppReplicationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationStatus') }})
    replication_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationStatusMessage') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleName') }})
    status: Optional[AppStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    total_server_groups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalServerGroups') }})
    total_servers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalServers') }})
    
