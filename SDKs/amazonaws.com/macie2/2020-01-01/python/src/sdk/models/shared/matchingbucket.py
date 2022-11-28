from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchingBucket:
    r"""MatchingBucket
    Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classifiable_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableObjectCount') }})
    classifiable_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableSizeInBytes') }})
    job_details: Optional[JobDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCount') }})
    object_count_by_encryption_type: Optional[ObjectCountByEncryptionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCountByEncryptionType') }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    size_in_bytes_compressed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytesCompressed') }})
    unclassifiable_object_count: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectCount') }})
    unclassifiable_object_size_in_bytes: Optional[ObjectLevelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectSizeInBytes') }})
    
