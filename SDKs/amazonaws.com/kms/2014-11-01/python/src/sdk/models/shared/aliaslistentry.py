from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AliasListEntry:
    alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasArn' }})
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasName' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetKeyId' }})
    
