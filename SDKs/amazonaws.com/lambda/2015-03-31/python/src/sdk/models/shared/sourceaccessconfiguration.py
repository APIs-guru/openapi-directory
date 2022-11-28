from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceAccessConfiguration:
    r"""SourceAccessConfiguration
    To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
    """
    
    type: Optional[SourceAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('URI') }})
    
