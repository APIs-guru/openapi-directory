from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTerminologyResponse:
    terminology_data_location: Optional[TerminologyDataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyDataLocation') }})
    terminology_properties: Optional[TerminologyProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyProperties') }})
    
