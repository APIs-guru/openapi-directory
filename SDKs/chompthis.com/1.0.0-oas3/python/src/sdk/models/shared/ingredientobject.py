from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IngredientObjectItemsCalorieConversionFactor:
    carbohydrate_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carbohydrate_value' }})
    fat_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fat_value' }})
    protein_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protein_value' }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsComponents:
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_points' }})
    gram_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gram_weight' }})
    is_refuse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_refuse' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pct_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pct_weight' }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsNutrients:
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_points' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footnote' }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    median: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'median' }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    per_100g: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_100g' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsPortions:
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_points' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footnote' }})
    gram_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gram_weight' }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    modifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier' }})
    

@dataclass_json
@dataclass
class IngredientObjectItems:
    calorie_conversion_factor: Optional[IngredientObjectItemsCalorieConversionFactor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calorie_conversion_factor' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'common_name' }})
    components: Optional[List[IngredientObjectItemsComponents]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footnote' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nutrients: Optional[List[IngredientObjectItemsNutrients]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutrients' }})
    portions: Optional[List[IngredientObjectItemsPortions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portions' }})
    protein_conversion_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protein_conversion_factor' }})
    score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    search_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_term' }})
    

@dataclass_json
@dataclass
class IngredientObject:
    items: Optional[List[IngredientObjectItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
