from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomPluginLocationDescription:
    r"""CustomPluginLocationDescription
    Information about the location of a custom plugin.
    """
    
    s3_location: Optional[S3LocationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    
