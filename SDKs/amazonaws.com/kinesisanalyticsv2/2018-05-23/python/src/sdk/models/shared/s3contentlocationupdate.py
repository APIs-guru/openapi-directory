from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ContentLocationUpdate:
    r"""S3ContentLocationUpdate
    Describes an update for the Amazon S3 code content location for an application.
    """
    
    bucket_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARNUpdate') }})
    file_key_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKeyUpdate') }})
    object_version_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectVersionUpdate') }})
    
