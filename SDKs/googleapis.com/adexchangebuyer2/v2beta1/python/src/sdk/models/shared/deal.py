from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class DealInput:
    r"""DealInput
    A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
    """
    
    available_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableEndTime') }})
    available_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableStartTime') }})
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    create_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createProductId') }})
    create_product_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createProductRevision') }})
    creative_restrictions: Optional[CreativeRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRestrictions') }})
    deal_serving_metadata: Optional[DealServingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealServingMetadata') }})
    deal_terms: Optional[DealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealTerms') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    syndication_product: Optional[DealSyndicationProductEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    targeting: Optional[MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    targeting_criterion: Optional[List[TargetingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingCriterion') }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    

@dataclass_json
@dataclass
class Deal:
    r"""Deal
    A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
    """
    
    available_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableEndTime') }})
    available_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableStartTime') }})
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    create_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createProductId') }})
    create_product_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createProductRevision') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creative_pre_approval_policy: Optional[DealCreativePreApprovalPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativePreApprovalPolicy') }})
    creative_restrictions: Optional[CreativeRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRestrictions') }})
    creative_safe_frame_compatibility: Optional[DealCreativeSafeFrameCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSafeFrameCompatibility') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    deal_serving_metadata: Optional[DealServingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealServingMetadata') }})
    deal_terms: Optional[DealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealTerms') }})
    delivery_control: Optional[DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryControl') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDealId') }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSetupComplete') }})
    programmatic_creative_source: Optional[DealProgrammaticCreativeSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticCreativeSource') }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    seller_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    syndication_product: Optional[DealSyndicationProductEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    targeting: Optional[MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    targeting_criterion: Optional[List[TargetingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingCriterion') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
