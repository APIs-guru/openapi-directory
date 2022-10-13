from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applaunchconfigurationstatus_enum
from . import launchdetails
from . import applaunchstatus_enum
from . import appreplicationconfigurationstatus_enum
from . import appreplicationstatus_enum
from . import appstatus_enum


@dataclass_json
@dataclass
class AppSummary:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    imported_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importedAppId' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_replication_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestReplicationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_configuration_status: Optional[applaunchconfigurationstatus_enum.AppLaunchConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchConfigurationStatus' }})
    launch_details: Optional[launchdetails.LaunchDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchDetails' }})
    launch_status: Optional[applaunchstatus_enum.AppLaunchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStatus' }})
    launch_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStatusMessage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    replication_configuration_status: Optional[appreplicationconfigurationstatus_enum.AppReplicationConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfigurationStatus' }})
    replication_status: Optional[appreplicationstatus_enum.AppReplicationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationStatus' }})
    replication_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationStatusMessage' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    status: Optional[appstatus_enum.AppStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    total_server_groups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalServerGroups' }})
    total_servers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalServers' }})
    
