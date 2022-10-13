from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcedatasyncs3destination
from . import resourcedatasyncsource


@dataclass_json
@dataclass
class CreateResourceDataSyncRequest:
    s3_destination: Optional[resourcedatasyncs3destination.ResourceDataSyncS3Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Destination' }})
    sync_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncName' }})
    sync_source: Optional[resourcedatasyncsource.ResourceDataSyncSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSource' }})
    sync_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncType' }})
    
