from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Execution:
    r"""Execution
    Execution
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    exit_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    function_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionId') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stderr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stderr') }})
    stdout: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stdout') }})
    time: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    trigger: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
