from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Videostatus:
    encoding: Optional[VideostatusEncoding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    ingest: Optional[VideostatusIngest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingest') }})
    
