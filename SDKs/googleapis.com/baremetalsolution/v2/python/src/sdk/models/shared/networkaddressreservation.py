from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkAddressReservation:
    r"""NetworkAddressReservation
    A reservation of one or more addresses in a network.
    """
    
    end_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endAddress') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    start_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startAddress') }})
    
