from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LfTagError:
    r"""LfTagError
    A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
    """
    
    error: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    lf_tag: Optional[LfTagPair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTag') }})
    
