from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateApplicationPresignedURLRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    url_type: URLTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UrlType') }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionExpirationDurationInSeconds') }})
    
