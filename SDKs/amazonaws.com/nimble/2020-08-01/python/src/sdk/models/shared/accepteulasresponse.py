from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eulaacceptance


@dataclass_json
@dataclass
class AcceptEulasResponse:
    eula_acceptances: Optional[List[eulaacceptance.EulaAcceptance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulaAcceptances' }})
    
