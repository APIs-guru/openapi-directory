from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import variableset


@dataclass_json
@dataclass
class ConfigurationVariables:
    mcm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcmId' }})
    variable_set: Optional[List[variableset.VariableSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variableSet' }})
    
