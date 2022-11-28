from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValueHolder:
    r"""ValueHolder
    A structure that can contain a value in multiple encoding formats.
    """
    
    ion_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IonBinary') }})
    ion_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IonText') }})
    
