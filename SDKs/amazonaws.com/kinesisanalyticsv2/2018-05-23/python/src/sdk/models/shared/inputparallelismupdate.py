from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputParallelismUpdate:
    r"""InputParallelismUpdate
    For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
    """
    
    count_update: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountUpdate') }})
    
