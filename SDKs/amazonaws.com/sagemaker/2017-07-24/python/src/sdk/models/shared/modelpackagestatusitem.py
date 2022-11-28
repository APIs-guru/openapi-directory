from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelPackageStatusItem:
    r"""ModelPackageStatusItem
    Represents the overall status of a model package.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: DetailedModelPackageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    
