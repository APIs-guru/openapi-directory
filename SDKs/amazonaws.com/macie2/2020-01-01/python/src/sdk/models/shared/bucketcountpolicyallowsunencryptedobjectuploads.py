from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketCountPolicyAllowsUnencryptedObjectUploads:
    allows_unencrypted_object_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsUnencryptedObjectUploads' }})
    denies_unencrypted_object_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deniesUnencryptedObjectUploads' }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknown' }})
    
