from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamingsessionstate_enum
from . import streamingsessionstatuscode_enum


@dataclass_json
@dataclass
class StreamingSession:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    ec2_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceType' }})
    launch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileId' }})
    owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownedBy' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    state: Optional[streamingsessionstate_enum.StreamingSessionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_code: Optional[streamingsessionstatuscode_enum.StreamingSessionStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    streaming_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    terminate_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminateAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
