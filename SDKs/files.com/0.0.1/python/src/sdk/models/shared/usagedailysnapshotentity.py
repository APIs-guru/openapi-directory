from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsageDailySnapshotEntity:
    r"""UsageDailySnapshotEntity
    List Usage Daily Snapshots
    """
    
    current_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_storage') }})
    date_: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    usage_by_top_level_dir: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_by_top_level_dir') }})
    
