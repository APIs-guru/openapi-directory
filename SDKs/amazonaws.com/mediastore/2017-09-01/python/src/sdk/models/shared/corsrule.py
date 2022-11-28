from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorsRule:
    r"""CorsRule
    A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
    """
    
    allowed_headers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedHeaders') }})
    allowed_origins: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOrigins') }})
    allowed_methods: Optional[List[MethodNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedMethods') }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExposeHeaders') }})
    max_age_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAgeSeconds') }})
    
