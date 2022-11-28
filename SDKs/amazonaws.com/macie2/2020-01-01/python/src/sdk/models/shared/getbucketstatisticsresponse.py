from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBucketStatisticsResponse:
    bucket_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCount') }})
    bucket_count_by_effective_permission: Optional[BucketCountByEffectivePermission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByEffectivePermission') }})
    bucket_count_by_encryption_type: Optional[BucketCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByEncryptionType') }})
    bucket_count_by_object_encryption_requirement: Optional[BucketCountPolicyAllowsUnencryptedObjectUploads] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByObjectEncryptionRequirement') }})
    bucket_count_by_shared_access_type: Optional[BucketCountBySharedAccessType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountBySharedAccessType') }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableObjectCount') }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableSizeInBytes') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCount') }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytesCompressed') }})
    unclassifiable_object_count: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectCount') }})
    unclassifiable_object_size_in_bytes: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectSizeInBytes') }})
    
