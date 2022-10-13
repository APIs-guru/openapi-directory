from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import bucketcountbyeffectivepermission
from . import bucketcountbyencryptiontype
from . import bucketcountpolicyallowsunencryptedobjectuploads
from . import bucketcountbysharedaccesstype
from . import objectlevelstatistics
from . import objectlevelstatistics


@dataclass_json
@dataclass
class GetBucketStatisticsResponse:
    bucket_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCount' }})
    bucket_count_by_effective_permission: Optional[bucketcountbyeffectivepermission.BucketCountByEffectivePermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCountByEffectivePermission' }})
    bucket_count_by_encryption_type: Optional[bucketcountbyencryptiontype.BucketCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCountByEncryptionType' }})
    bucket_count_by_object_encryption_requirement: Optional[bucketcountpolicyallowsunencryptedobjectuploads.BucketCountPolicyAllowsUnencryptedObjectUploads] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCountByObjectEncryptionRequirement' }})
    bucket_count_by_shared_access_type: Optional[bucketcountbysharedaccesstype.BucketCountBySharedAccessType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCountBySharedAccessType' }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableObjectCount' }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableSizeInBytes' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectCount' }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytes' }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytesCompressed' }})
    unclassifiable_object_count: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectCount' }})
    unclassifiable_object_size_in_bytes: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectSizeInBytes' }})
    
