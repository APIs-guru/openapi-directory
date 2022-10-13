from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelAPINutritionInfo:
    calories_from_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaloriesFromFat' }})
    cholesterol: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cholesterol' }})
    cholesterol_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CholesterolPct' }})
    dietary_fiber: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DietaryFiber' }})
    dietary_fiber_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DietaryFiberPct' }})
    mono_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonoFat' }})
    poly_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolyFat' }})
    potassium: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Potassium' }})
    potassium_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PotassiumPct' }})
    protein: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protein' }})
    protein_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProteinPct' }})
    sat_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SatFat' }})
    sat_fat_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SatFatPct' }})
    singular_yield_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingularYieldUnit' }})
    sodium: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sodium' }})
    sodium_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SodiumPct' }})
    sugar: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sugar' }})
    total_calories: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCalories' }})
    total_carbs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCarbs' }})
    total_carbs_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCarbsPct' }})
    total_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalFat' }})
    total_fat_pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalFatPct' }})
    trans_fat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransFat' }})
    
