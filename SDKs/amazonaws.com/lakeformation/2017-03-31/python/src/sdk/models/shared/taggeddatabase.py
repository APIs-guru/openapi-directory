from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaseresource
from . import lftagpair


@dataclass_json
@dataclass
class TaggedDatabase:
    database: Optional[databaseresource.DatabaseResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    lf_tags: Optional[List[lftagpair.LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTags' }})
    
