from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Preview:
    r"""Preview
    A collection of rich text that will be displayed as a preview to another app.
    
    This is read-only except for a small group of whitelisted apps.
    """
    
    fallback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback') }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    header_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header_link') }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_link') }})
    
