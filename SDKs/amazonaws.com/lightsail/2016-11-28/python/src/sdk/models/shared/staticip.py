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
class StaticIP:
    r"""StaticIP
    Describes a static IP.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    attached_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedTo') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAttached') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    
