from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewPutLegacyPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPutLegacyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_review_controller_review_request_legacy: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_review_request_legacy1: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_review_request_legacy2: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReviewPutLegacyRequest:
    path_params: ReviewPutLegacyPathParams = field()
    request: ReviewPutLegacyRequests = field()
    

@dataclass
class ReviewPutLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
