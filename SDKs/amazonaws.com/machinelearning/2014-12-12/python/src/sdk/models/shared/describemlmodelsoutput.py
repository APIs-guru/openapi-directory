from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMlModelsOutput:
    r"""DescribeMlModelsOutput
    Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    results: Optional[List[MlModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
