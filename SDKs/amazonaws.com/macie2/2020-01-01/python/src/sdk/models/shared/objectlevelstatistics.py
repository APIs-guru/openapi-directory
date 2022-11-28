from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectLevelStatistics:
    r"""ObjectLevelStatistics
    Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, total storage size values are based on the size of the latest version of each applicable object in the bucket.
    """
    
    file_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    storage_class: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
