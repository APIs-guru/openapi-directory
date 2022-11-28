from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RateLimit:
    r"""RateLimit
    This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
    """
    
    api_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiContext') }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiName') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    resources: Optional[List[Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
