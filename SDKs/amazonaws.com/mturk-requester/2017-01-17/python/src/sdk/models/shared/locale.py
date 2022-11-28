from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Locale:
    r"""Locale
    The Locale data structure represents a geographical region or location.
    """
    
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    subdivision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdivision') }})
    
