from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelingJobDataAttributes:
    r"""LabelingJobDataAttributes
    Attributes of the data specified by the customer. Use these to describe the data to be labeled.
    """
    
    content_classifiers: Optional[List[ContentClassifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentClassifiers') }})
    
