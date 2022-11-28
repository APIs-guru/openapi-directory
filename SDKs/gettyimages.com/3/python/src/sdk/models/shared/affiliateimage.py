from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AffiliateImage:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    preview_urls: Optional[AffiliateImageUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_urls') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
