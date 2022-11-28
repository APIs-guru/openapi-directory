from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLApplicationConfiguration:
    r"""SQLApplicationConfiguration
    Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    inputs: Optional[List[Input]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    outputs: Optional[List[Output]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    reference_data_sources: Optional[List[ReferenceDataSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSources') }})
    
