from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IngredientObjectItemsCalorieConversionFactor:
    r"""IngredientObjectItemsCalorieConversionFactor
    An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
    """
    
    carbohydrate_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbohydrate_value') }})
    fat_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fat_value') }})
    protein_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein_value') }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsComponents:
    r"""IngredientObjectItemsComponents
    An object containing information on a specific component of this food item
    """
    
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    gram_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gram_weight') }})
    is_refuse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_refuse') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pct_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pct_weight') }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsNutrients:
    r"""IngredientObjectItemsNutrients
    An object containing information for a specific nutrient found in this food item
    """
    
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    median: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    per_100g: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_100g') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    

@dataclass_json
@dataclass
class IngredientObjectItemsPortions:
    r"""IngredientObjectItemsPortions
    An object containing information on a specific food portion found in this item
    """
    
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    gram_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gram_weight') }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    modifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier') }})
    

@dataclass_json
@dataclass
class IngredientObjectItems:
    r"""IngredientObjectItems
    An object containing information for this specific item.
    """
    
    calorie_conversion_factor: Optional[IngredientObjectItemsCalorieConversionFactor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calorie_conversion_factor') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_name') }})
    components: Optional[List[IngredientObjectItemsComponents]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    footnote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nutrients: Optional[List[IngredientObjectItemsNutrients]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutrients') }})
    portions: Optional[List[IngredientObjectItemsPortions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portions') }})
    protein_conversion_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein_conversion_factor') }})
    score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    search_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_term') }})
    

@dataclass_json
@dataclass
class IngredientObject:
    r"""IngredientObject
    Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
    """
    
    items: Optional[List[IngredientObjectItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
