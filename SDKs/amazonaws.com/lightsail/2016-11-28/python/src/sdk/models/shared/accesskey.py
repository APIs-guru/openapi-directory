from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessKey:
    r"""AccessKey
    <p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a>CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys\">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_used: Optional[AccessKeyLastUsed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUsed') }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    status: Optional[StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
