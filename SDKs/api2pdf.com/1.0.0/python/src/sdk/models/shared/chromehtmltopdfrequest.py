from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChromeHTMLToPdfRequest:
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    inline_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlinePdf') }})
    options: Optional[ChromeAdvancedOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
