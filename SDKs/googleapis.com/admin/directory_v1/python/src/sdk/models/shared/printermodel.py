from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrinterModel:
    r"""PrinterModel
    Printer manufacturer and model
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    make_and_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('makeAndModel') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    
