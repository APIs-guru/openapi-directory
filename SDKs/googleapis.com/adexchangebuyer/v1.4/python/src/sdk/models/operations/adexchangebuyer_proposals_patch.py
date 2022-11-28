from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class AdexchangebuyerProposalsPatchUpdateActionEnum(str, Enum):
    ACCEPT = "accept"
    CANCEL = "cancel"
    PROPOSE = "propose"
    PROPOSE_AND_ACCEPT = "proposeAndAccept"
    UNKNOWN_ACTION = "unknownAction"
    UPDATE_NON_TERMS = "updateNonTerms"


@dataclass
class AdexchangebuyerProposalsPatchPathParams:
    proposal_id: str = field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'revisionNumber', 'style': 'simple', 'explode': False }})
    update_action: AdexchangebuyerProposalsPatchUpdateActionEnum = field(metadata={'path_param': { 'field_name': 'updateAction', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerProposalsPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerProposalsPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerProposalsPatchRequest:
    path_params: AdexchangebuyerProposalsPatchPathParams = field()
    query_params: AdexchangebuyerProposalsPatchQueryParams = field()
    security: AdexchangebuyerProposalsPatchSecurity = field()
    request: Optional[shared.Proposal] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdexchangebuyerProposalsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    proposal: Optional[shared.Proposal] = field(default=None)
    
