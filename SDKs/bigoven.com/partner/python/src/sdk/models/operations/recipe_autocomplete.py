from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class RecipeAutoCompleteQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeAutoCompleteRequest:
    query_params: RecipeAutoCompleteQueryParams = field(default=None)
    

@dataclass
class RecipeAutoCompleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    recipe_auto_complete_200_application_json_strings: Optional[List[str]] = field(default=None)
    recipe_auto_complete_200_text_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
