from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationConfiguration:
    r"""DestinationConfiguration
    A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
    """
    
    s3: Optional[S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
