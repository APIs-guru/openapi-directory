from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Scoping:
    r"""Scoping
    Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
    """
    
    excludes: Optional[JobScopingBlock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[JobScopingBlock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
