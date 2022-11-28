from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3Bucket:
    r"""S3Bucket
    Provides information about the S3 bucket that a finding applies to.
    """
    
    allows_unencrypted_object_uploads: Optional[AllowsUnencryptedObjectUploadsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsUnencryptedObjectUploads') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_server_side_encryption: Optional[ServerSideEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultServerSideEncryption') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[S3BucketOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public_access: Optional[BucketPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccess') }})
    tags: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
