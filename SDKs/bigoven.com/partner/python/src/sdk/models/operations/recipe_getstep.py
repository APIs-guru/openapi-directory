from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RecipeGetStepQueryParams:
    recipe_id: int = field(metadata={'query_param': { 'field_name': 'recipeId', 'style': 'form', 'explode': True }})
    step_id: int = field(metadata={'query_param': { 'field_name': 'stepId', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetStepRequest:
    query_params: RecipeGetStepQueryParams = field()
    

@dataclass
class RecipeGetStepResponse:
    content_type: str = field()
    status_code: int = field()
    recipe_get_step_200_application_json_string: Optional[str] = field(default=None)
    recipe_get_step_200_application_xml_string: Optional[str] = field(default=None)
    recipe_get_step_200_text_json_string: Optional[str] = field(default=None)
    recipe_get_step_200_text_xml_string: Optional[str] = field(default=None)
    
