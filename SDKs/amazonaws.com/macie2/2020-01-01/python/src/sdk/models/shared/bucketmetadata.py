from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketMetadata:
    r"""BucketMetadata
    Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    allows_unencrypted_object_uploads: Optional[AllowsUnencryptedObjectUploadsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsUnencryptedObjectUploads') }})
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketArn') }})
    bucket_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableObjectCount') }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableSizeInBytes') }})
    job_details: Optional[JobDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCount') }})
    object_count_by_encryption_type: Optional[ObjectCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCountByEncryptionType') }})
    public_access: Optional[BucketPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccess') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    replication_details: Optional[ReplicationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationDetails') }})
    server_side_encryption: Optional[BucketServerSideEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverSideEncryption') }})
    shared_access: Optional[SharedAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAccess') }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytesCompressed') }})
    tags: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    unclassifiable_object_count: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectCount') }})
    unclassifiable_object_size_in_bytes: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectSizeInBytes') }})
    versioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    
