from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowsunencryptedobjectuploads_enum
from . import serversideencryption
from . import s3bucketowner
from . import bucketpublicaccess
from . import keyvaluepair


@dataclass_json
@dataclass
class S3Bucket:
    allows_unencrypted_object_uploads: Optional[allowsunencryptedobjectuploads_enum.AllowsUnencryptedObjectUploadsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsUnencryptedObjectUploads' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_server_side_encryption: Optional[serversideencryption.ServerSideEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultServerSideEncryption' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[s3bucketowner.S3BucketOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public_access: Optional[bucketpublicaccess.BucketPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccess' }})
    tags: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
