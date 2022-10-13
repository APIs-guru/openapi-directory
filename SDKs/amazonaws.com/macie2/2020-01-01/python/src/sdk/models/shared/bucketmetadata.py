from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowsunencryptedobjectuploads_enum
from . import jobdetails
from . import objectcountbyencryptiontype
from . import bucketpublicaccess
from . import replicationdetails
from . import bucketserversideencryption
from . import sharedaccess_enum
from . import keyvaluepair
from . import objectlevelstatistics
from . import objectlevelstatistics


@dataclass_json
@dataclass
class BucketMetadata:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    allows_unencrypted_object_uploads: Optional[allowsunencryptedobjectuploads_enum.AllowsUnencryptedObjectUploadsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsUnencryptedObjectUploads' }})
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketArn' }})
    bucket_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableObjectCount' }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableSizeInBytes' }})
    job_details: Optional[jobdetails.JobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDetails' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectCount' }})
    object_count_by_encryption_type: Optional[objectcountbyencryptiontype.ObjectCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectCountByEncryptionType' }})
    public_access: Optional[bucketpublicaccess.BucketPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccess' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    replication_details: Optional[replicationdetails.ReplicationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationDetails' }})
    server_side_encryption: Optional[bucketserversideencryption.BucketServerSideEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverSideEncryption' }})
    shared_access: Optional[sharedaccess_enum.SharedAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAccess' }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytes' }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytesCompressed' }})
    tags: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    unclassifiable_object_count: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectCount' }})
    unclassifiable_object_size_in_bytes: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectSizeInBytes' }})
    versioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioning' }})
    
