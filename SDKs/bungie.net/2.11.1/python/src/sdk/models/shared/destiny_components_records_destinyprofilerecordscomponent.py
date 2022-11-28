from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsRecordsDestinyProfileRecordsComponent:
    active_score: Optional[int] = field(default=None)
    legacy_score: Optional[int] = field(default=None)
    lifetime_score: Optional[int] = field(default=None)
    record_categories_root_node_hash: Optional[int] = field(default=None)
    record_seals_root_node_hash: Optional[int] = field(default=None)
    records: Optional[dict[str, DestinyComponentsRecordsDestinyRecordComponent]] = field(default=None)
    score: Optional[int] = field(default=None)
    tracked_record_hash: Optional[int] = field(default=None)
    
