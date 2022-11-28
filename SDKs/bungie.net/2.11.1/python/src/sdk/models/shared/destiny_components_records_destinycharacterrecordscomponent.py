from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsRecordsDestinyCharacterRecordsComponent:
    featured_record_hashes: Optional[List[int]] = field(default=None)
    record_categories_root_node_hash: Optional[int] = field(default=None)
    record_seals_root_node_hash: Optional[int] = field(default=None)
    records: Optional[dict[str, DestinyComponentsRecordsDestinyRecordComponent]] = field(default=None)
    
