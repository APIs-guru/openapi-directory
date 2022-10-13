from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewPutPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPutRequests:
    api2_controllers_web_api_review_controller_review_request: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_review_request1: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_review_request2: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ReviewPutRequest:
    path_params: ReviewPutPathParams = field(default=None)
    request: ReviewPutRequests = field(default=None)
    

@dataclass
class ReviewPutResponse:
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
