from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeLayersResult:
    r"""DescribeLayersResult
    Contains the response to a <code>DescribeLayers</code> request.
    """
    
    layers: Optional[List[Layer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    
