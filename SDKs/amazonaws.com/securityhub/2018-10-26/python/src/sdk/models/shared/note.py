from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Note:
    r"""Note
    A user-defined note added to a finding.
    """
    
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    updated_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    updated_by: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedBy') }})
    
