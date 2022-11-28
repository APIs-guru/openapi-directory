from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArimaOrder:
    r"""ArimaOrder
    Arima order, can be used for both non-seasonal and seasonal parts.
    """
    
    d: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('d') }})
    p: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p') }})
    q: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('q') }})
    
