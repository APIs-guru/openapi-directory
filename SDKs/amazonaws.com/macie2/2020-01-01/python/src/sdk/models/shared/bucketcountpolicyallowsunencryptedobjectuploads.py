from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketCountPolicyAllowsUnencryptedObjectUploads:
    r"""BucketCountPolicyAllowsUnencryptedObjectUploads
    Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
    """
    
    allows_unencrypted_object_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsUnencryptedObjectUploads') }})
    denies_unencrypted_object_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deniesUnencryptedObjectUploads') }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown') }})
    
