from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateModel:
    added: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_download') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    deleted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deleted_download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_download') }})
    
