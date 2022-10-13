from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReviewPostPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPostRequests:
    api2_controllers_web_api_review_controller_review_request: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_review_request1: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_review_request2: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ReviewPostRequest:
    path_params: ReviewPostPathParams = field(default=None)
    request: ReviewPostRequests = field(default=None)
    

@dataclass
class ReviewPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
