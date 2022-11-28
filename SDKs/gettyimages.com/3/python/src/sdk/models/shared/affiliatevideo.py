from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AffiliateVideo:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    clip_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip_length') }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    preview_urls: Optional[AffiliateVideoUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_urls') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
