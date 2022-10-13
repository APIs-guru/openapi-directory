from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import licensetype_enum


@dataclass_json
@dataclass
class CreateReplicationJobRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted' }})
    frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    license_type: Optional[licensetype_enum.LicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseType' }})
    number_of_recent_amis_to_keep: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRecentAmisToKeep' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    run_once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runOnce' }})
    seed_replication_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedReplicationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverId' }})
    
