from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketplaceDeal:
    r"""MarketplaceDeal
    A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
    """
    
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    creation_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimeMs') }})
    creative_pre_approval_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativePreApprovalPolicy') }})
    creative_safe_frame_compatibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSafeFrameCompatibility') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    deal_serving_metadata: Optional[DealServingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealServingMetadata') }})
    delivery_control: Optional[DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryControl') }})
    external_deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDealId') }})
    flight_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTimeMs') }})
    flight_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTimeMs') }})
    inventory_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryDescription') }})
    is_rfp_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRfpTemplate') }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSetupComplete') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_update_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTimeMs') }})
    makegood_requested_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('makegoodRequestedReason') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRevisionNumber') }})
    programmatic_creative_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticCreativeSource') }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    seller_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    shared_targetings: Optional[List[SharedTargeting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedTargetings') }})
    syndication_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    terms: Optional[DealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
