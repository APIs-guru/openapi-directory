from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExclusionRuleExcludeDeliveryEnum(str, Enum):
    STREAM = "Stream"
    DOWNLOAD = "Download"
    STREAM_OR_DOWNLOAD = "StreamOrDownload"
    PROGRESSIVE_DOWNLOAD = "ProgressiveDownload"
    NONE = "None"

class ExclusionRuleExcludeMinResolutionEnum(str, Enum):
    SD = "SD"
    HD_720 = "HD-720"
    HD_1080 = "HD-1080"
    HD_4_K = "HD-4K"
    EXTERNAL = "External"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class ExclusionRule:
    r"""ExclusionRule
    Defines playback exclusion rules for an Offer or Entitlement.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    exclude_airplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeAirplay') }})
    exclude_chromecast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeChromecast') }})
    exclude_delivery: Optional[ExclusionRuleExcludeDeliveryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeDelivery') }})
    exclude_min_resolution: Optional[ExclusionRuleExcludeMinResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeMinResolution') }})
    
