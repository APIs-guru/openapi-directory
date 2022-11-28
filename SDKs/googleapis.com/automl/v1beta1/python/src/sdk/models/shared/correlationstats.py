from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CorrelationStats:
    r"""CorrelationStats
    A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
    """
    
    cramers_v: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cramersV') }})
    
