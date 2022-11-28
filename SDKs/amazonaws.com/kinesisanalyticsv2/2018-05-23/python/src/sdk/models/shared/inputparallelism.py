from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputParallelism:
    r"""InputParallelism
    For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. 
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    
