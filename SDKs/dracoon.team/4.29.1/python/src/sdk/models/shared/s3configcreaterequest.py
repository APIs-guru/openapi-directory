from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ConfigCreateRequest:
    r"""S3ConfigCreateRequest
    Request model for creating a S3 configuration
    """
    
    access_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKey') }})
    secret_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKey') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketUrl') }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUrl') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
