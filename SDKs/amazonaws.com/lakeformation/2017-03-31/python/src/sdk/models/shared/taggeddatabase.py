from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaggedDatabase:
    r"""TaggedDatabase
    A structure describing a database resource with tags.
    """
    
    database: Optional[DatabaseResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    lf_tags: Optional[List[LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTags') }})
    
