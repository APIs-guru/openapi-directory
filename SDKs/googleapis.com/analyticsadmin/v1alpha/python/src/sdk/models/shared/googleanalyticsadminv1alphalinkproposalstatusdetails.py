from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum(str, Enum):
    LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED"
    GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS"
    LINKED_PRODUCT = "LINKED_PRODUCT"

class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum(str, Enum):
    LINK_PROPOSAL_STATE_UNSPECIFIED = "LINK_PROPOSAL_STATE_UNSPECIFIED"
    AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS"
    AWAITING_REVIEW_FROM_LINKED_PRODUCT = "AWAITING_REVIEW_FROM_LINKED_PRODUCT"
    WITHDRAWN = "WITHDRAWN"
    DECLINED = "DECLINED"
    EXPIRED = "EXPIRED"
    OBSOLETE = "OBSOLETE"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails:
    link_proposal_initiating_product: Optional[GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkProposalInitiatingProduct' }})
    link_proposal_state: Optional[GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkProposalState' }})
    requestor_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestorEmail' }})
    
