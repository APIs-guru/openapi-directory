from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Tag
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    function_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionId') }})
    size: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
