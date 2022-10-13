from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewPutLegacyPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    review_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPutLegacyRequests:
    api2_controllers_web_api_review_controller_review_request_legacy: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_review_request_legacy1: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_review_request_legacy2: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ReviewPutLegacyRequest:
    path_params: ReviewPutLegacyPathParams = field(default=None)
    request: ReviewPutLegacyRequests = field(default=None)
    

@dataclass
class ReviewPutLegacyResponse:
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
