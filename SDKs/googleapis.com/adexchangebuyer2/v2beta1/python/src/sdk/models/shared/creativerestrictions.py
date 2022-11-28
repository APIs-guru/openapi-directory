from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeRestrictionsCreativeFormatEnum(str, Enum):
    CREATIVE_FORMAT_UNSPECIFIED = "CREATIVE_FORMAT_UNSPECIFIED"
    DISPLAY = "DISPLAY"
    VIDEO = "VIDEO"

class CreativeRestrictionsSkippableAdTypeEnum(str, Enum):
    SKIPPABLE_AD_TYPE_UNSPECIFIED = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    SKIPPABLE = "SKIPPABLE"
    INSTREAM_SELECT = "INSTREAM_SELECT"
    NOT_SKIPPABLE = "NOT_SKIPPABLE"


@dataclass_json
@dataclass
class CreativeRestrictions:
    r"""CreativeRestrictions
    Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
    """
    
    creative_format: Optional[CreativeRestrictionsCreativeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFormat') }})
    creative_specifications: Optional[List[CreativeSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSpecifications') }})
    skippable_ad_type: Optional[CreativeRestrictionsSkippableAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableAdType') }})
    
