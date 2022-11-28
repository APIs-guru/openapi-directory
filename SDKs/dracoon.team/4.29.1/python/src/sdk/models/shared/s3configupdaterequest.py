from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ConfigUpdateRequest:
    r"""S3ConfigUpdateRequest
    Request model for updating a S3 configuration
    """
    
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKey') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketUrl') }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUrl') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKey') }})
    
