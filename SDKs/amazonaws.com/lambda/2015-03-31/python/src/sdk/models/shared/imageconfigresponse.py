from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageConfigResponse:
    r"""ImageConfigResponse
    Response to GetFunctionConfiguration request.
    """
    
    error: Optional[ImageConfigError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    image_config: Optional[ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfig') }})
    
