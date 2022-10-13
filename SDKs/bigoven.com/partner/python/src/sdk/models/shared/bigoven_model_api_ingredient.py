from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api_ingredientinfo


@dataclass_json
@dataclass
class BigOvenModelAPIIngredient:
    display_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayIndex' }})
    display_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayQuantity' }})
    html_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTMLName' }})
    ingredient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngredientID' }})
    ingredient_info: Optional[bigoven_model_api_ingredientinfo.BigOvenModelAPIIngredientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngredientInfo' }})
    is_heading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsHeading' }})
    is_linked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLinked' }})
    metric_display_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricDisplayQuantity' }})
    metric_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricQuantity' }})
    metric_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricUnit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    preparation_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreparationNotes' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
