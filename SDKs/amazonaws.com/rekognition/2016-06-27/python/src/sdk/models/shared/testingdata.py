from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestingData:
    r"""TestingData
    The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
    """
    
    assets: Optional[List[Asset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assets') }})
    auto_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoCreate') }})
    
