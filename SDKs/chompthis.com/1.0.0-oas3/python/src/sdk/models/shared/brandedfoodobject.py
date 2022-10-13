from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BrandedFoodObjectItemsCountryDetails:
    english_speaking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'english_speaking' }})
    non_english_speaking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'non_english_speaking' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietFlags:
    compatibility_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility_description' }})
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility_level' }})
    diet_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diet_label' }})
    ingredient: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredient' }})
    ingredient_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredient_description' }})
    is_allergen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_allergen' }})
    is_compatible: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_compatible' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsGlutenFree:
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility_level' }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence_description' }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_compatible' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsVegan:
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility_level' }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence_description' }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_compatible' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabelsVegetarian:
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility_level' }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    confidence_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence_description' }})
    is_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_compatible' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsDietLabels:
    gluten_free: Optional[BrandedFoodObjectItemsDietLabelsGlutenFree] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gluten_free' }})
    vegan: Optional[BrandedFoodObjectItemsDietLabelsVegan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vegan' }})
    vegetarian: Optional[BrandedFoodObjectItemsDietLabelsVegetarian] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vegetarian' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsNutrients:
    data_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_points' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    per_100g: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_100g' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackage:
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosFront:
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small' }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosIngredients:
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small' }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotosNutrition:
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'small' }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsPackagingPhotos:
    front: Optional[BrandedFoodObjectItemsPackagingPhotosFront] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'front' }})
    ingredients: Optional[BrandedFoodObjectItemsPackagingPhotosIngredients] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredients' }})
    nutrition: Optional[BrandedFoodObjectItemsPackagingPhotosNutrition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutrition' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItemsServing:
    measurement_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    size_fulltext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_fulltext' }})
    

@dataclass_json
@dataclass
class BrandedFoodObjectItems:
    allergens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allergens' }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    brand_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_list' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    country_details: Optional[BrandedFoodObjectItemsCountryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_details' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    diet_flags: Optional[List[BrandedFoodObjectItemsDietFlags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diet_flags' }})
    diet_labels: Optional[BrandedFoodObjectItemsDietLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diet_labels' }})
    has_english_ingredients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_english_ingredients' }})
    ingredient_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredient_list' }})
    ingredients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredients' }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    minerals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minerals' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nutrients: Optional[List[BrandedFoodObjectItemsNutrients]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutrients' }})
    package: Optional[BrandedFoodObjectItemsPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    packaging_photos: Optional[BrandedFoodObjectItemsPackagingPhotos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packaging_photos' }})
    palm_oil_ingredients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'palm_oil_ingredients' }})
    serving: Optional[BrandedFoodObjectItemsServing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serving' }})
    traces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traces' }})
    vitamins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vitamins' }})
    

@dataclass_json
@dataclass
class BrandedFoodObject:
    items: Optional[List[BrandedFoodObjectItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
