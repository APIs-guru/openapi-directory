from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PretargetingConfigDimensions:
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class PretargetingConfigExcludedPlacements:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PretargetingConfigPlacements:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PretargetingConfigVideoPlayerSizes:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    min_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minHeight' }})
    min_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minWidth' }})
    

@dataclass_json
@dataclass
class PretargetingConfig:
    billing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingId' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configName' }})
    creative_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeType' }})
    dimensions: Optional[List[PretargetingConfigDimensions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    excluded_content_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedContentLabels' }})
    excluded_geo_criteria_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedGeoCriteriaIds' }})
    excluded_placements: Optional[List[PretargetingConfigExcludedPlacements]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedPlacements' }})
    excluded_user_lists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedUserLists' }})
    excluded_verticals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedVerticals' }})
    geo_criteria_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoCriteriaIds' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    maximum_qps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumQps' }})
    minimum_viewability_decile: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumViewabilityDecile' }})
    mobile_carriers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileCarriers' }})
    mobile_devices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDevices' }})
    mobile_operating_system_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileOperatingSystemVersions' }})
    placements: Optional[List[PretargetingConfigPlacements]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placements' }})
    platforms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    supported_creative_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedCreativeAttributes' }})
    user_identifier_data_required: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIdentifierDataRequired' }})
    user_lists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLists' }})
    vendor_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendorTypes' }})
    verticals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticals' }})
    video_player_sizes: Optional[List[PretargetingConfigVideoPlayerSizes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPlayerSizes' }})
    
