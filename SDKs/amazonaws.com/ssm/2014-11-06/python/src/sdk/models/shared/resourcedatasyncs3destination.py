from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDataSyncS3Destination:
    r"""ResourceDataSyncS3Destination
    Information about the target S3 bucket for the resource data sync.
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    sync_format: ResourceDataSyncS3FormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncFormat') }})
    awskms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSKMSKeyARN') }})
    destination_data_sharing: Optional[ResourceDataSyncDestinationDataSharing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDataSharing') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
