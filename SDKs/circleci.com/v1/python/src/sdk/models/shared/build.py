from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecycle_enum
from . import previousbuild


@dataclass_json
@dataclass
class Build:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    build_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_time_millis' }})
    build_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_url' }})
    committer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_email' }})
    committer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_name' }})
    dont_build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dont_build' }})
    lifecycle: Optional[lifecycle_enum.LifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    previous: Optional[previousbuild.PreviousBuild] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    queued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queued_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reponame: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reponame' }})
    retry_of: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retry_of' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    vcs_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_url' }})
    why: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'why' }})
    
