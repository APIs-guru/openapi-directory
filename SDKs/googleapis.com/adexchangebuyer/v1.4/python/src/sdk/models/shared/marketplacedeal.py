from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import privatedata
from . import dealservingmetadata
from . import deliverycontrol
from . import contactinformation
from . import sharedtargeting
from . import dealterms


@dataclass_json
@dataclass
class MarketplaceDeal:
    buyer_private_data: Optional[privatedata.PrivateData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPrivateData' }})
    creation_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeMs' }})
    creative_pre_approval_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativePreApprovalPolicy' }})
    creative_safe_frame_compatibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSafeFrameCompatibility' }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealId' }})
    deal_serving_metadata: Optional[dealservingmetadata.DealServingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealServingMetadata' }})
    delivery_control: Optional[deliverycontrol.DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryControl' }})
    external_deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDealId' }})
    flight_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightEndTimeMs' }})
    flight_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightStartTimeMs' }})
    inventory_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryDescription' }})
    is_rfp_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRfpTemplate' }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSetupComplete' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_update_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTimeMs' }})
    makegood_requested_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'makegoodRequestedReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productRevisionNumber' }})
    programmatic_creative_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticCreativeSource' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    seller_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerContacts' }})
    shared_targetings: Optional[List[sharedtargeting.SharedTargeting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedTargetings' }})
    syndication_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syndicationProduct' }})
    terms: Optional[dealterms.DealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyCode' }})
    
