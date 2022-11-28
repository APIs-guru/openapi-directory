from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomSettings:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    css_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css_link') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    html_footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_footer') }})
    html_nav: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_nav') }})
    java_script_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('java_script_link') }})
    
