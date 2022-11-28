from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenericAttachment:
    r"""GenericAttachment
    Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
    """
    
    attachment_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentLinkUrl') }})
    buttons: Optional[List[Button]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    sub_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
