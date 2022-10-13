from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import migrationstrategy_enum
from . import locale_enum


@dataclass_json
@dataclass
class StartMigrationResponse:
    migration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrationId' }})
    migration_strategy: Optional[migrationstrategy_enum.MigrationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrationStrategy' }})
    migration_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    v1_bot_locale: Optional[locale_enum.LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1BotLocale' }})
    v1_bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1BotName' }})
    v1_bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1BotVersion' }})
    v2_bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2BotId' }})
    v2_bot_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2BotRole' }})
    
