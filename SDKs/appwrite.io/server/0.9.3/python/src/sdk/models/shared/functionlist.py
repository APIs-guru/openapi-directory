from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import function


@dataclass_json
@dataclass
class FunctionList:
    functions: List[function.Function] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
