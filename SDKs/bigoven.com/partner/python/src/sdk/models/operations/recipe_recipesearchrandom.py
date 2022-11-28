from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeRecipeSearchRandomQueryParams:
    any_kw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'any_kw', 'style': 'form', 'explode': True }})
    boostmine: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'boostmine', 'style': 'form', 'explode': True }})
    champion: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'champion', 'style': 'form', 'explode': True }})
    chs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'chs', 'style': 'form', 'explode': True }})
    coll: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'coll', 'style': 'form', 'explode': True }})
    cps: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'cps', 'style': 'form', 'explode': True }})
    cuisine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cuisine', 'style': 'form', 'explode': True }})
    db: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'db', 'style': 'form', 'explode': True }})
    dyf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dyf', 'style': 'form', 'explode': True }})
    exclude_cat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_cat', 'style': 'form', 'explode': True }})
    exclude_ing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_ing', 'style': 'form', 'explode': True }})
    exclude_primarycat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_primarycat', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    folder: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'folder', 'style': 'form', 'explode': True }})
    glf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'glf', 'style': 'form', 'explode': True }})
    include_cat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_cat', 'style': 'form', 'explode': True }})
    include_ing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_ing', 'style': 'form', 'explode': True }})
    include_primarycat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_primarycat', 'style': 'form', 'explode': True }})
    max_ingredients: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxIngredients', 'style': 'form', 'explode': True }})
    min_ingredients: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minIngredients', 'style': 'form', 'explode': True }})
    ntf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ntf', 'style': 'form', 'explode': True }})
    photos: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'photos', 'style': 'form', 'explode': True }})
    rmf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rmf', 'style': 'form', 'explode': True }})
    servings_min: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'servingsMin', 'style': 'form', 'explode': True }})
    sff: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sff', 'style': 'form', 'explode': True }})
    slf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'slf', 'style': 'form', 'explode': True }})
    synonyms: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'synonyms', 'style': 'form', 'explode': True }})
    title_kw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title_kw', 'style': 'form', 'explode': True }})
    tnf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tnf', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    total_mins: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'totalMins', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    userset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userset', 'style': 'form', 'explode': True }})
    vgn: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vgn', 'style': 'form', 'explode': True }})
    vtn: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vtn', 'style': 'form', 'explode': True }})
    wmf: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'wmf', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeRecipeSearchRandomRequest:
    query_params: RecipeRecipeSearchRandomQueryParams = field()
    

@dataclass
class RecipeRecipeSearchRandomResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_recipe_search_result: Optional[shared.BigOvenModelApi2RecipeSearchResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
