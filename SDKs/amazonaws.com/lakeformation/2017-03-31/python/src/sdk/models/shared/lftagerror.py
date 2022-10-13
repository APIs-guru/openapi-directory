from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetail
from . import lftagpair


@dataclass_json
@dataclass
class LfTagError:
    error: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    lf_tag: Optional[lftagpair.LfTagPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTag' }})
    
