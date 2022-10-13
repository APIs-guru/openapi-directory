from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabasehardware
from . import resourcelocation
from . import relationaldatabaseendpoint
from . import pendingmaintenanceaction
from . import pendingmodifiedrelationaldatabasevalues
from . import resourcetype_enum
from . import tag


@dataclass_json
@dataclass
class RelationalDatabase:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    backup_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupRetentionEnabled' }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateIdentifier' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineVersion' }})
    hardware: Optional[relationaldatabasehardware.RelationalDatabaseHardware] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardware' }})
    latest_restorable_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRestorableTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    master_database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterDatabaseName' }})
    master_endpoint: Optional[relationaldatabaseendpoint.RelationalDatabaseEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterEndpoint' }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterUsername' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterApplyStatus' }})
    pending_maintenance_actions: Optional[List[pendingmaintenanceaction.PendingMaintenanceAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingMaintenanceActions' }})
    pending_modified_values: Optional[pendingmodifiedrelationaldatabasevalues.PendingModifiedRelationalDatabaseValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingModifiedValues' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyAccessible' }})
    relational_database_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseBlueprintId' }})
    relational_database_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseBundleId' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    secondary_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryAvailabilityZone' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
