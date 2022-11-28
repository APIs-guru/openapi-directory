from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyConfigDestinyManifest:
    r"""DestinyConfigDestinyManifest
    DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
    """
    
    icon_image_pyramid_info: Optional[List[DestinyConfigImagePyramidEntry]] = field(default=None)
    json_world_component_content_paths: Optional[dict[str, dict[str, str]]] = field(default=None)
    json_world_content_paths: Optional[dict[str, str]] = field(default=None)
    mobile_asset_content_path: Optional[str] = field(default=None)
    mobile_clan_banner_database_path: Optional[str] = field(default=None)
    mobile_gear_asset_data_bases: Optional[List[DestinyConfigGearAssetDataBaseDefinition]] = field(default=None)
    mobile_gear_cdn: Optional[dict[str, str]] = field(default=None)
    mobile_world_content_paths: Optional[dict[str, str]] = field(default=None)
    version: Optional[str] = field(default=None)
    
