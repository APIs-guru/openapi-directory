from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitDetail:
    author_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    author_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_email' }})
    author_login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_login' }})
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_name' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    commit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_url' }})
    committer_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    committer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_email' }})
    committer_login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_login' }})
    committer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer_name' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
