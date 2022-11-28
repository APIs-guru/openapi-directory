from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CommonModelsDestiny2CoreSettings:
    active_seals_root_node_hash: Optional[int] = field(default=None)
    active_triumphs_root_node_hash: Optional[int] = field(default=None)
    ammo_type_heavy_icon: Optional[str] = field(default=None)
    ammo_type_primary_icon: Optional[str] = field(default=None)
    ammo_type_special_icon: Optional[str] = field(default=None)
    badges_root_node: Optional[int] = field(default=None)
    collection_root_node: Optional[int] = field(default=None)
    current_rank_progression_hashes: Optional[List[int]] = field(default=None)
    current_season_hash: Optional[int] = field(default=None)
    current_seasonal_artifact_hash: Optional[int] = field(default=None)
    exotic_catalysts_root_node_hash: Optional[int] = field(default=None)
    future_season_hashes: Optional[List[int]] = field(default=None)
    legacy_seals_root_node_hash: Optional[int] = field(default=None)
    legacy_triumphs_root_node_hash: Optional[int] = field(default=None)
    lore_root_node_hash: Optional[int] = field(default=None)
    medals_root_node: Optional[int] = field(default=None)
    medals_root_node_hash: Optional[int] = field(default=None)
    metrics_root_node: Optional[int] = field(default=None)
    past_season_hashes: Optional[List[int]] = field(default=None)
    records_root_node: Optional[int] = field(default=None)
    seasonal_challenges_presentation_node_hash: Optional[int] = field(default=None)
    undiscovered_collectible_image: Optional[str] = field(default=None)
    
