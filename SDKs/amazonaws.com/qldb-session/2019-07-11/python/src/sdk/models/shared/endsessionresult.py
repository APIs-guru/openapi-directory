from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timinginformation


@dataclass_json
@dataclass
class EndSessionResult:
    timing_information: Optional[timinginformation.TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimingInformation' }})
    
