from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botaliasstatus_enum


@dataclass_json
@dataclass
class BotAliasSummary:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasId' }})
    bot_alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasName' }})
    bot_alias_status: Optional[botaliasstatus_enum.BotAliasStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
