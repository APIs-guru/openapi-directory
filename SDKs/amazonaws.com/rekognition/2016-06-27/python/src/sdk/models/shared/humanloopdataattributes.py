from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanLoopDataAttributes:
    r"""HumanLoopDataAttributes
    Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
    """
    
    content_classifiers: Optional[List[ContentClassifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentClassifiers') }})
    
