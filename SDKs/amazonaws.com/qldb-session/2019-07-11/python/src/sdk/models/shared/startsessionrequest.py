from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartSessionRequest:
    r"""StartSessionRequest
    Specifies a request to start a new session.
    """
    
    ledger_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LedgerName') }})
    
