from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Image:
    r"""Image
    The type that defines the details of an image, such as size and URL.
    """
    
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
