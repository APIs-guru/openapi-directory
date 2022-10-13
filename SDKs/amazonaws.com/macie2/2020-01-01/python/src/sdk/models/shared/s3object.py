from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import serversideencryption
from . import storageclass_enum
from . import keyvaluepair


@dataclass_json
@dataclass
class S3Object:
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketArn' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eTag' }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    public_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccess' }})
    server_side_encryption: Optional[serversideencryption.ServerSideEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverSideEncryption' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    storage_class: Optional[storageclass_enum.StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    tags: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionId' }})
    
