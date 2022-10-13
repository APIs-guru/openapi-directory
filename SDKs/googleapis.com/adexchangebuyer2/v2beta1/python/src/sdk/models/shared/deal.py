from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import privatedata
from . import creativerestrictions
from . import dealservingmetadata
from . import dealterms
from . import deliverycontrol
from . import contactinformation
from . import marketplacetargeting
from . import targetingcriteria

class DealCreativePreApprovalPolicyEnum(str, Enum):
    CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
    SELLER_PRE_APPROVAL_REQUIRED = "SELLER_PRE_APPROVAL_REQUIRED"
    SELLER_PRE_APPROVAL_NOT_REQUIRED = "SELLER_PRE_APPROVAL_NOT_REQUIRED"

class DealCreativeSafeFrameCompatibilityEnum(str, Enum):
    CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"

class DealProgrammaticCreativeSourceEnum(str, Enum):
    PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
    ADVERTISER = "ADVERTISER"
    PUBLISHER = "PUBLISHER"

class DealSyndicationProductEnum(str, Enum):
    SYNDICATION_PRODUCT_UNSPECIFIED = "SYNDICATION_PRODUCT_UNSPECIFIED"
    CONTENT = "CONTENT"
    MOBILE = "MOBILE"
    VIDEO = "VIDEO"
    GAMES = "GAMES"


@dataclass_json
@dataclass
class Deal:
    available_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableEndTime' }})
    available_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableStartTime' }})
    buyer_private_data: Optional[privatedata.PrivateData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPrivateData' }})
    create_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createProductId' }})
    create_product_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createProductRevision' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creative_pre_approval_policy: Optional[DealCreativePreApprovalPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativePreApprovalPolicy' }})
    creative_restrictions: Optional[creativerestrictions.CreativeRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeRestrictions' }})
    creative_safe_frame_compatibility: Optional[DealCreativeSafeFrameCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSafeFrameCompatibility' }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealId' }})
    deal_serving_metadata: Optional[dealservingmetadata.DealServingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealServingMetadata' }})
    deal_terms: Optional[dealterms.DealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealTerms' }})
    delivery_control: Optional[deliverycontrol.DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryControl' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    external_deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDealId' }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSetupComplete' }})
    programmatic_creative_source: Optional[DealProgrammaticCreativeSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticCreativeSource' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    seller_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerContacts' }})
    syndication_product: Optional[DealSyndicationProductEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syndicationProduct' }})
    targeting: Optional[marketplacetargeting.MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targeting' }})
    targeting_criterion: Optional[List[targetingcriteria.TargetingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingCriterion' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyCode' }})
    
