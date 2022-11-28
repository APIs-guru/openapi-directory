from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ContentBaseLocationUpdate:
    r"""S3ContentBaseLocationUpdate
    The information required to update the S3 base location that holds the application.
    """
    
    bucket_arn_update: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARNUpdate') }})
    base_path_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasePathUpdate') }})
    
