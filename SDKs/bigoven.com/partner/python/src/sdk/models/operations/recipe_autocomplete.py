from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class RecipeAutoCompleteQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeAutoCompleteRequest:
    query_params: RecipeAutoCompleteQueryParams = field()
    

@dataclass
class RecipeAutoCompleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    recipe_auto_complete_200_application_json_strings: Optional[List[str]] = field(default=None)
    recipe_auto_complete_200_text_json_strings: Optional[List[str]] = field(default=None)
    
