from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewPutReplyPathParams:
    reply_id: str = field(metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPutReplyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_review_controller_post_reply_req: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_post_reply_req1: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_post_reply_req2: Optional[shared.Api2ControllersWebAPIReviewControllerPostReplyReq] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReviewPutReplyRequest:
    path_params: ReviewPutReplyPathParams = field()
    request: ReviewPutReplyRequests = field()
    

@dataclass
class ReviewPutReplyResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_reply: Optional[shared.BigOvenModelAPIReply] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
