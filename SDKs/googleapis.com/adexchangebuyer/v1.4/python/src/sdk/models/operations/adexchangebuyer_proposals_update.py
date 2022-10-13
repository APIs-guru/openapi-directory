from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AdexchangebuyerProposalsUpdateUpdateActionEnum(str, Enum):
    ACCEPT = "accept"
    CANCEL = "cancel"
    PROPOSE = "propose"
    PROPOSE_AND_ACCEPT = "proposeAndAccept"
    UNKNOWN_ACTION = "unknownAction"
    UPDATE_NON_TERMS = "updateNonTerms"


@dataclass
class AdexchangebuyerProposalsUpdatePathParams:
    proposal_id: str = field(default=None, metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(default=None, metadata={'path_param': { 'field_name': 'revisionNumber', 'style': 'simple', 'explode': False }})
    update_action: AdexchangebuyerProposalsUpdateUpdateActionEnum = field(default=None, metadata={'path_param': { 'field_name': 'updateAction', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerProposalsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerProposalsUpdateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerProposalsUpdateRequest:
    path_params: AdexchangebuyerProposalsUpdatePathParams = field(default=None)
    query_params: AdexchangebuyerProposalsUpdateQueryParams = field(default=None)
    request: Optional[shared.Proposal] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AdexchangebuyerProposalsUpdateSecurity = field(default=None)
    

@dataclass
class AdexchangebuyerProposalsUpdateResponse:
    content_type: str = field(default=None)
    proposal: Optional[shared.Proposal] = field(default=None)
    status_code: int = field(default=None)
    
