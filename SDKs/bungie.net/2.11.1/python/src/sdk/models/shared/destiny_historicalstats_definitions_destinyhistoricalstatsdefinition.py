from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition:
    category: Optional[int] = field(default=None)
    group: Optional[int] = field(default=None)
    icon_image: Optional[str] = field(default=None)
    medal_tier_hash: Optional[int] = field(default=None)
    merge_method: Optional[int] = field(default=None)
    modes: Optional[List[int]] = field(default=None)
    period_types: Optional[List[int]] = field(default=None)
    stat_description: Optional[str] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    stat_name: Optional[str] = field(default=None)
    stat_name_abbr: Optional[str] = field(default=None)
    unit_label: Optional[str] = field(default=None)
    unit_type: Optional[int] = field(default=None)
    weight: Optional[int] = field(default=None)
    
