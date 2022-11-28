from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RecipeFeedbackPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeFeedbackRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_models_recipes_feedback_dto: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_recipes_feedback_dto1: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_recipes_feedback_dto2: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class RecipeFeedbackRequest:
    path_params: RecipeFeedbackPathParams = field()
    request: RecipeFeedbackRequests = field()
    

@dataclass
class RecipeFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
