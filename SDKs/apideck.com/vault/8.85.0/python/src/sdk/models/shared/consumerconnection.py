from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConsumerConnectionStateEnum(str, Enum):
    AVAILABLE = "available"
    CALLABLE = "callable"
    ADDED = "added"
    CONFIGURED = "configured"
    AUTHORIZED = "authorized"


@dataclass_json
@dataclass
class ConsumerConnection:
    auth_type: Optional[AuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type') }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_id') }})
    settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    state: Optional[ConsumerConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tag_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_line') }})
    unified_api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
