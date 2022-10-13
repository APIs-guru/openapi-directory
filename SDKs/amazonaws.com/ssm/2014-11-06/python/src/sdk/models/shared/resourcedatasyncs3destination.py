from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcedatasyncdestinationdatasharing
from . import resourcedatasyncs3format_enum


@dataclass_json
@dataclass
class ResourceDataSyncS3Destination:
    awskms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AWSKMSKeyARN' }})
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    destination_data_sharing: Optional[resourcedatasyncdestinationdatasharing.ResourceDataSyncDestinationDataSharing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationDataSharing' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    sync_format: resourcedatasyncs3format_enum.ResourceDataSyncS3FormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncFormat' }})
    
