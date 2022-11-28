from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CriteriaBlockForJob:
    r"""CriteriaBlockForJob
    Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
    """
    
    and_: Optional[List[CriteriaForJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('and') }})
    
