from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BrandedFoodObjectItemsCountryDetails:
    r"""BrandedFoodObjectItemsCountryDetails
    An object containing additional information on the countries where this item is found
    """
    
    english_speaking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('english_speaking') }})
    non_english_speaking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_english_speaking') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietFlags:
    r"""BrandedFoodObjectItemsDietFlags
    An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
    """
    
    compatibility_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility_description') }})
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility_level') }})
    diet_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diet_label') }})
    ingredient: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingredient') }})
    ingredient_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingredient_description') }})
    is_allergen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_allergen') }})
    is_compatible: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_compatible') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsGlutenFree:
    r"""BrandedFoodObjectItemsDietLabelsGlutenFree
    An object containing information on this item's compatibility with Gluten Free diets
    """
    
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility_level') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence_description') }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_compatible') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsVegan:
    r"""BrandedFoodObjectItemsDietLabelsVegan
    An object containing information on this item's compatibility with the Vegan diets
    """
    
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility_level') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence_description') }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_compatible') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsVegetarian:
    r"""BrandedFoodObjectItemsDietLabelsVegetarian
    An object containing information on this item's compatibility with Vegetarian diets
    """
    
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility_level') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence_description') }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_compatible') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabels:
    r"""BrandedFoodObjectItemsDietLabels
    An object containing this item's compatibility grades for each supported diet
    """
    
    gluten_free: Optional[BrandedFoodObjectItemsDietLabelsGlutenFree] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gluten_free') }})
    vegan: Optional[BrandedFoodObjectItemsDietLabelsVegan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vegan') }})
    vegetarian: Optional[BrandedFoodObjectItemsDietLabelsVegetarian] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vegetarian') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsNutrients:
    r"""BrandedFoodObjectItemsNutrients
    An object containing information for a specific nutrient found in this food item
    """
    
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    per_100g: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_100g') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackage:
    r"""BrandedFoodObjectItemsPackage
    An object containing basic packaging information about this item
    """
    
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosFront:
    r"""BrandedFoodObjectItemsPackagingPhotosFront
    An object containing photos of the front of this item's packaging
    """
    
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small') }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosIngredients:
    r"""BrandedFoodObjectItemsPackagingPhotosIngredients
    An object containing photos of the ingredients on this item's packaging
    """
    
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small') }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosNutrition:
    r"""BrandedFoodObjectItemsPackagingPhotosNutrition
    An object containing photos of this item's nutrition label
    """
    
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small') }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotos:
    r"""BrandedFoodObjectItemsPackagingPhotos
    A object containing a collection of photos of this item's packaging
    """
    
    front: Optional[BrandedFoodObjectItemsPackagingPhotosFront] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('front') }})
    ingredients: Optional[BrandedFoodObjectItemsPackagingPhotosIngredients] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingredients') }})
    nutrition: Optional[BrandedFoodObjectItemsPackagingPhotosNutrition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutrition') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsServing:
    r"""BrandedFoodObjectItemsServing
    An object containing serving information for this item
    """
    
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    size_fulltext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_fulltext') }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItems:
    r"""BrandedFoodObjectItems
    An object containing information for this specific item.
    """
    
    allergens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allergens') }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    brand_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_list') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    country_details: Optional[BrandedFoodObjectItemsCountryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_details') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    diet_flags: Optional[List[BrandedFoodObjectItemsDietFlags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diet_flags') }})
    diet_labels: Optional[BrandedFoodObjectItemsDietLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diet_labels') }})
    has_english_ingredients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_english_ingredients') }})
    ingredient_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingredient_list') }})
    ingredients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingredients') }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    minerals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minerals') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nutrients: Optional[List[BrandedFoodObjectItemsNutrients]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutrients') }})
    package: Optional[BrandedFoodObjectItemsPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    packaging_photos: Optional[BrandedFoodObjectItemsPackagingPhotos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packaging_photos') }})
    palm_oil_ingredients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('palm_oil_ingredients') }})
    serving: Optional[BrandedFoodObjectItemsServing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serving') }})
    traces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    vitamins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitamins') }})
    

@dataclass_json
@dataclass
class BrandedFoodObject:
    r"""BrandedFoodObject
    Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
    """
    
    items: Optional[List[BrandedFoodObjectItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
