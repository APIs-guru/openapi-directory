from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CriteriaForJob:
    r"""CriteriaForJob
    Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
    """
    
    simple_criterion: Optional[SimpleCriterionForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleCriterion') }})
    tag_criterion: Optional[TagCriterionForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagCriterion') }})
    
