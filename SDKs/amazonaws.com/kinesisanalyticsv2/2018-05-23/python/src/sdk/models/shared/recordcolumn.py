from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecordColumn:
    r"""RecordColumn
    <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    sql_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlType') }})
    mapping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mapping') }})
    
