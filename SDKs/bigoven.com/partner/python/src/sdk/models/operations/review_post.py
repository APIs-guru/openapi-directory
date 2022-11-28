from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReviewPostPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_review_controller_review_request: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_review_controller_review_request1: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_review_controller_review_request2: Optional[shared.Api2ControllersWebAPIReviewControllerReviewRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReviewPostRequest:
    path_params: ReviewPostPathParams = field()
    request: ReviewPostRequests = field()
    

@dataclass
class ReviewPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
