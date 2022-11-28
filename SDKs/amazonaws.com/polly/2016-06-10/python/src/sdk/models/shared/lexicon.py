from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Lexicon:
    r"""Lexicon
    Provides lexicon name and lexicon content in string format. For more information, see <a href=\"https://www.w3.org/TR/pronunciation-lexicon/\">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
