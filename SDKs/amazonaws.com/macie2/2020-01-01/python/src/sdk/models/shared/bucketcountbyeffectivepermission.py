from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketCountByEffectivePermission:
    r"""BucketCountByEffectivePermission
    Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
    """
    
    publicly_accessible: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyAccessible') }})
    publicly_readable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyReadable') }})
    publicly_writable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyWritable') }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown') }})
    
