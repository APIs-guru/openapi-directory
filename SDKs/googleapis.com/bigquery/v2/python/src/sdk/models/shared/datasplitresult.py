from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablereference
from . import tablereference
from . import tablereference


@dataclass_json
@dataclass
class DataSplitResult:
    evaluation_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationTable' }})
    test_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTable' }})
    training_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingTable' }})
    
