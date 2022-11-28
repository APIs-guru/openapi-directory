from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExternalEventEntityEventTypeEnum(str, Enum):
    LDAP_SYNC = "ldap_sync"
    REMOTE_SERVER_SYNC = "remote_server_sync"
    LOCKOUT = "lockout"
    LDAP_LOGIN = "ldap_login"
    SAML_LOGIN = "saml_login"
    CLIENT_LOG = "client_log"
    PENDING_WORK = "pending_work"

class ExternalEventEntityStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    PARTIAL_FAILURE = "partial_failure"


@dataclass_json
@dataclass
class ExternalEventEntity:
    r"""ExternalEventEntity
    List External Events
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_url') }})
    bytes_synced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytes_synced') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    errored_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errored_files') }})
    event_type: Optional[ExternalEventEntityEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    folder_behavior_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder_behavior_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    remote_server_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_server_type') }})
    status: Optional[ExternalEventEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    successful_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successful_files') }})
    
