from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Collection:
    r"""Collection
    Collection
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    dollar_permissions: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$permissions') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    date_updated: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateUpdated') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
