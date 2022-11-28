from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DmlStatistics:
    deleted_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedRowCount') }})
    inserted_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertedRowCount') }})
    updated_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedRowCount') }})
    
