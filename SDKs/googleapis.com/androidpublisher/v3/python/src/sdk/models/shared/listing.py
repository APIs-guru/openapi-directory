from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Listing:
    r"""Listing
    A localized store listing. The resource for ListingsService.
    """
    
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullDescription') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
