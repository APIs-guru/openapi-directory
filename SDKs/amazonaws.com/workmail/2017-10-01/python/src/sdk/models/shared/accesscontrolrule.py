from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accesscontrolruleeffect_enum


@dataclass_json
@dataclass
class AccessControlRule:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    effect: Optional[accesscontrolruleeffect_enum.AccessControlRuleEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRanges' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    not_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotActions' }})
    not_ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotIpRanges' }})
    not_user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotUserIds' }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserIds' }})
    
