from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMigrationResponse:
    alerts: Optional[List[MigrationAlert]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    migration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationId') }})
    migration_status: Optional[MigrationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationStatus') }})
    migration_strategy: Optional[MigrationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationStrategy') }})
    migration_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    v1_bot_locale: Optional[LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1BotLocale') }})
    v1_bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1BotName') }})
    v1_bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1BotVersion') }})
    v2_bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2BotId') }})
    v2_bot_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2BotRole') }})
    
