from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InviteMemberPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class InviteMemberRequests:
    invite_members_request: Optional[shared.InviteMembersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    invite_members_request1: Optional[shared.InviteMembersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invite_members_request2: Optional[shared.InviteMembersRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class InviteMemberRequest:
    path_params: InviteMemberPathParams = field()
    request: InviteMemberRequests = field()
    

@dataclass
class InviteMemberResponse:
    content_type: str = field()
    status_code: int = field()
    
