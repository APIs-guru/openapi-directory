from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api_userinfotiny


@dataclass_json
@dataclass
class BigOvenModelAPIReply:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    poster: Optional[bigoven_model_api_userinfotiny.BigOvenModelAPIUserInfoTiny] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Poster' }})
    review_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewID' }})
    
