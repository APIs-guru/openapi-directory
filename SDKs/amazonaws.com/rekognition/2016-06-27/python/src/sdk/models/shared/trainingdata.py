from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrainingData:
    r"""TrainingData
    The dataset used for training.
    """
    
    assets: Optional[List[Asset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assets') }})
    
