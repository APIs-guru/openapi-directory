from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alarms
from . import authmode_enum
from . import imagelocation
from . import portalstatus


@dataclass_json
@dataclass
class DescribePortalResponse:
    alarms: Optional[alarms.Alarms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarms' }})
    notification_sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationSenderEmail' }})
    portal_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalArn' }})
    portal_auth_mode: Optional[authmode_enum.AuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalAuthMode' }})
    portal_client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalClientId' }})
    portal_contact_email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalContactEmail' }})
    portal_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalDescription' }})
    portal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    portal_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_logo_image_location: Optional[imagelocation.ImageLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalLogoImageLocation' }})
    portal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalName' }})
    portal_start_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalStartUrl' }})
    portal_status: portalstatus.PortalStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalStatus' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
