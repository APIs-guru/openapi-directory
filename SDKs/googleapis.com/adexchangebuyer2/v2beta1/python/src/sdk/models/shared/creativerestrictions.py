from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import creativespecification

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
    creative_format: Optional[CreativeRestrictionsCreativeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFormat' }})
    creative_specifications: Optional[List[creativespecification.CreativeSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSpecifications' }})
    skippable_ad_type: Optional[CreativeRestrictionsSkippableAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableAdType' }})
    
