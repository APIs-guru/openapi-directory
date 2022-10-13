from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationoutput


@dataclass_json
@dataclass
class GetAppValidationOutputResponse:
    validation_output_list: Optional[List[validationoutput.ValidationOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationOutputList' }})
    
