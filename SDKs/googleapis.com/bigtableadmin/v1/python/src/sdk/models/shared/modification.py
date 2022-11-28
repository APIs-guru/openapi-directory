from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Modification:
    r"""Modification
    A create, update, or delete of a particular column family.
    """
    
    create: Optional[ColumnFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    drop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drop') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    update: Optional[ColumnFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
