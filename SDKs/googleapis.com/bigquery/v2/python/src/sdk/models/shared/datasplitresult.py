from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSplitResult:
    r"""DataSplitResult
    Data split result. This contains references to the training and evaluation data tables that were used to train the model.
    """
    
    evaluation_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationTable') }})
    test_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTable') }})
    training_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingTable') }})
    
