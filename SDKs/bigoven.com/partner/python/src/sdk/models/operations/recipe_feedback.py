from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RecipeFeedbackPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeFeedbackRequests:
    api2_models_recipes_feedback_dto: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_recipes_feedback_dto1: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_recipes_feedback_dto2: Optional[shared.Api2ModelsRecipesFeedbackDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class RecipeFeedbackRequest:
    path_params: RecipeFeedbackPathParams = field(default=None)
    request: RecipeFeedbackRequests = field(default=None)
    

@dataclass
class RecipeFeedbackResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
