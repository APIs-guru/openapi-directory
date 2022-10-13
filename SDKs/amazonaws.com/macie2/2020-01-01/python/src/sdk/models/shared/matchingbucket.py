from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobdetails
from . import objectcountbyencryptiontype
from . import objectlevelstatistics
from . import objectlevelstatistics


@dataclass_json
@dataclass
class MatchingBucket:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableObjectCount' }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifiableSizeInBytes' }})
    job_details: Optional[jobdetails.JobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDetails' }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectCount' }})
    object_count_by_encryption_type: Optional[objectcountbyencryptiontype.ObjectCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectCountByEncryptionType' }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytes' }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytesCompressed' }})
    unclassifiable_object_count: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectCount' }})
    unclassifiable_object_size_in_bytes: Optional[objectlevelstatistics.ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unclassifiableObjectSizeInBytes' }})
    
