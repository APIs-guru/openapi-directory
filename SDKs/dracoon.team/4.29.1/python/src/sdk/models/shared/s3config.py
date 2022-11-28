from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Config:
    r"""S3Config
    S3 configuration
    """
    
    access_key_defined: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyDefined') }})
    bucket_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketUrl') }})
    secret_key_defined: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKeyDefined') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUrl') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
