from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewPostReplyPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPostReplyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_review_controller_post_reply_req: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_post_reply_req1: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_post_reply_req2: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReviewPostReplyRequest:
    path_params: ReviewPostReplyPathParams = field()
    request: ReviewPostReplyRequests = field()
    

@dataclass
class ReviewPostReplyResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_reply: Optional[shared.BigOvenModelAPIReply] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
