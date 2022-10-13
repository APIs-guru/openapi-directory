from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreativeRequirementsCreativeFormatEnum(str, Enum):
    CREATIVE_FORMAT_UNSPECIFIED = "CREATIVE_FORMAT_UNSPECIFIED"
    DISPLAY = "DISPLAY"
    VIDEO = "VIDEO"

class CreativeRequirementsCreativePreApprovalPolicyEnum(str, Enum):
    CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
    SELLER_PRE_APPROVAL_REQUIRED = "SELLER_PRE_APPROVAL_REQUIRED"
    SELLER_PRE_APPROVAL_NOT_REQUIRED = "SELLER_PRE_APPROVAL_NOT_REQUIRED"

class CreativeRequirementsCreativeSafeFrameCompatibilityEnum(str, Enum):
    CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"

class CreativeRequirementsProgrammaticCreativeSourceEnum(str, Enum):
    PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
    ADVERTISER = "ADVERTISER"
    PUBLISHER = "PUBLISHER"

class CreativeRequirementsSkippableAdTypeEnum(str, Enum):
    SKIPPABLE_AD_TYPE_UNSPECIFIED = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    SKIPPABLE = "SKIPPABLE"
    INSTREAM_SELECT = "INSTREAM_SELECT"
    NOT_SKIPPABLE = "NOT_SKIPPABLE"
    ANY = "ANY"


@dataclass_json
@dataclass
class CreativeRequirements:
    creative_format: Optional[CreativeRequirementsCreativeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFormat' }})
    creative_pre_approval_policy: Optional[CreativeRequirementsCreativePreApprovalPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativePreApprovalPolicy' }})
    creative_safe_frame_compatibility: Optional[CreativeRequirementsCreativeSafeFrameCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSafeFrameCompatibility' }})
    max_ad_duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAdDurationMs' }})
    programmatic_creative_source: Optional[CreativeRequirementsProgrammaticCreativeSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticCreativeSource' }})
    skippable_ad_type: Optional[CreativeRequirementsSkippableAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableAdType' }})
    
