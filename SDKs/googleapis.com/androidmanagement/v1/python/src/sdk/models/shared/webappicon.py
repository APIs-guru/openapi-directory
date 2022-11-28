from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebAppIcon:
    r"""WebAppIcon
    An icon for a web app. Supported formats are: png, jpg and webp.
    """
    
    image_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageData') }})
    
