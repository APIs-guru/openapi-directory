from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StringStats:
    r"""StringStats
    The data statistics of a series of STRING values.
    """
    
    top_unigram_stats: Optional[List[UnigramStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topUnigramStats') }})
    
