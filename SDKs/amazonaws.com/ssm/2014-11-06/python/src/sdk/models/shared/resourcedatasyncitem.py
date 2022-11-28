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
class ResourceDataSyncItem:
    r"""ResourceDataSyncItem
    Information about a resource data sync configuration, including its current status and last successful sync.
    """
    
    last_status: Optional[LastResourceDataSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatus') }})
    last_successful_sync_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSuccessfulSyncTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_sync_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSyncStatusMessage') }})
    last_sync_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSyncTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_destination: Optional[ResourceDataSyncS3Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Destination') }})
    sync_created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncCreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sync_last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncLastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sync_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncName') }})
    sync_source: Optional[ResourceDataSyncSourceWithState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSource') }})
    sync_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncType') }})
    
