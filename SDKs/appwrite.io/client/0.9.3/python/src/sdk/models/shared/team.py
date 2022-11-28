from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Team:
    r"""Team
    Team
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
