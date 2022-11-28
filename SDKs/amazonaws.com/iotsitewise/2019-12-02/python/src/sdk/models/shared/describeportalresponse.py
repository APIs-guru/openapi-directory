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
class DescribePortalResponse:
    portal_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalArn') }})
    portal_client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalClientId') }})
    portal_contact_email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalContactEmail') }})
    portal_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalId') }})
    portal_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    portal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalName') }})
    portal_start_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStartUrl') }})
    portal_status: PortalStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStatus') }})
    alarms: Optional[Alarms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    notification_sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSenderEmail') }})
    portal_auth_mode: Optional[AuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalAuthMode') }})
    portal_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalDescription') }})
    portal_logo_image_location: Optional[ImageLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalLogoImageLocation') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
