from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ModelsCounts:
    added_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddedCount' }, 'form': { 'field_name': 'AddedCount' }})
    followers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FollowersCount' }, 'form': { 'field_name': 'FollowersCount' }})
    following_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FollowingCount' }, 'form': { 'field_name': 'FollowingCount' }})
    private_recipe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateRecipeCount' }, 'form': { 'field_name': 'PrivateRecipeCount' }})
    public_recipe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicRecipeCount' }, 'form': { 'field_name': 'PublicRecipeCount' }})
    total_recipes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecipes' }, 'form': { 'field_name': 'TotalRecipes' }})
    
