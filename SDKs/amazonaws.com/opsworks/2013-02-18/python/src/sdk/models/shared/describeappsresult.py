from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAppsResult:
    r"""DescribeAppsResult
    Contains the response to a <code>DescribeApps</code> request.
    """
    
    apps: Optional[List[App]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Apps') }})
    
