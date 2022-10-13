from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import file


@dataclass_json
@dataclass
class Partner:
    company: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    icon: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listed' }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
