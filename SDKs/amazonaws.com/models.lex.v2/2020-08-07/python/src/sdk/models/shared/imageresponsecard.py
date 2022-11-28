from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageResponseCard:
    r"""ImageResponseCard
    <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
    """
    
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    buttons: Optional[List[Button]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    
