from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaStepMetadata:
    r"""LambdaStepMetadata
    Metadata for a Lambda step.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    output_parameters: Optional[List[OutputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputParameters') }})
    
