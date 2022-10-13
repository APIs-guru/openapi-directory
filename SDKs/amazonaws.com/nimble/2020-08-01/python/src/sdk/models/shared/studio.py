from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import studiostate_enum
from . import studiostatuscode_enum
from . import studioencryptionconfiguration


@dataclass_json
@dataclass
class Studio:
    admin_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminRoleArn' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRegion' }})
    sso_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoClientId' }})
    state: Optional[studiostate_enum.StudioStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_code: Optional[studiostatuscode_enum.StudioStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    studio_encryption_configuration: Optional[studioencryptionconfiguration.StudioEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioEncryptionConfiguration' }})
    studio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioId' }})
    studio_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioName' }})
    studio_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioUrl' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoleArn' }})
    
