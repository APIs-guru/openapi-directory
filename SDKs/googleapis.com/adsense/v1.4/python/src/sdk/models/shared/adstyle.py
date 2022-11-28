from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdStyleColors:
    r"""AdStyleColors
    The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
    """
    
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    border: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('border') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class AdStyleFont:
    r"""AdStyleFont
    The font which is included in the style.
    """
    
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class AdStyle:
    colors: Optional[AdStyleColors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    corners: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corners') }})
    font: Optional[AdStyleFont] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('font') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
