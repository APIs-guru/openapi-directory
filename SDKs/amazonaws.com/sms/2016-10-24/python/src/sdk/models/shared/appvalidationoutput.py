from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ssmoutput


@dataclass_json
@dataclass
class AppValidationOutput:
    ssm_output: Optional[ssmoutput.SsmOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssmOutput' }})
    
