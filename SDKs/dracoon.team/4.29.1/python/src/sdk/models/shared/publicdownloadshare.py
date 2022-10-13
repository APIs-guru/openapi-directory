from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import filekey
from . import privatekeycontainer


@dataclass_json
@dataclass
class PublicDownloadShare:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorName' }})
    creator_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorUsername' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_key: Optional[filekey.FileKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    has_download_limit: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDownloadLimit' }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProtected' }})
    limit_reached: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitReached' }})
    media_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    private_key_container: Optional[privatekeycontainer.PrivateKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyContainer' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
