from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteBucketAccessKeyRequest:
    access_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    
