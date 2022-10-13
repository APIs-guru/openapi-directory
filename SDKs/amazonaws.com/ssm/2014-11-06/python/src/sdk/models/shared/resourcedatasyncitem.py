from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastresourcedatasyncstatus_enum
from . import resourcedatasyncs3destination
from . import resourcedatasyncsourcewithstate


@dataclass_json
@dataclass
class ResourceDataSyncItem:
    last_status: Optional[lastresourcedatasyncstatus_enum.LastResourceDataSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatus' }})
    last_successful_sync_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulSyncTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_sync_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSyncStatusMessage' }})
    last_sync_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSyncTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_destination: Optional[resourcedatasyncs3destination.ResourceDataSyncS3Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Destination' }})
    sync_created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncCreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sync_last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncLastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sync_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncName' }})
    sync_source: Optional[resourcedatasyncsourcewithstate.ResourceDataSyncSourceWithState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSource' }})
    sync_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncType' }})
    
