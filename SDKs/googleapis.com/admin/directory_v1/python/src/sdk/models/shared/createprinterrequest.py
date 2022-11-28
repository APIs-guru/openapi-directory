from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePrinterRequestInput:
    r"""CreatePrinterRequestInput
    Request for adding a new printer.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    printer: Optional[PrinterInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printer') }})
    
